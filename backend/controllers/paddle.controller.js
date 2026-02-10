import { Paddle, EventName } from '@paddle/paddle-node-sdk';
import User from '../models/user.model.js';
import Transaction from '../models/transaction.model.js';

// Initialize Paddle SDK
const paddle = new Paddle(process.env.PADDLE_API_KEY);

/**
 * Handle Paddle webhook events
 */
export const handlePaddleWebhook = async (req, res) => {
    const signature = req.headers['paddle-signature'] || '';
    const rawRequestBody = req.rawBody ? req.rawBody.toString() : '';
    const secretKey = process.env.PADDLE_WEBHOOK_SECRET || '';

    try {
        if (signature && rawRequestBody) {
            const eventData = await paddle.webhooks.unmarshal(rawRequestBody, secretKey, signature);

            switch (eventData.eventType) {
                case EventName.TransactionCompleted: {
                    const txnData = eventData.data;

                    // Extract email: customData first (most reliable), then Paddle fields
                    const customerEmail =
                        txnData.customData?.userEmail ||
                        txnData.customer?.email ||
                        txnData.checkout?.customer?.email ||
                        '';

                    console.log(`✅ Transaction ${txnData.id} completed for ${customerEmail}`);
                    console.log('📦 Webhook custom data:', JSON.stringify(txnData.customData));

                    // Verify Product ID (Price ID)
                    const items = txnData.items || [];
                    const bookPriceId = "pri_01kgypxwte44xafwh5x0c6152k"; // Your Book Price ID
                    const hasBook = items.some(item => item.price?.id === bookPriceId);

                    if (customerEmail && hasBook) {
                        // Find user by email and add "book" to purchases
                        const user = await User.findOne({ email: customerEmail.toLowerCase() });

                        if (user) {
                            if (!user.purchases.includes("book")) {
                                user.purchases.push("book");
                                await user.save();
                                console.log(`📚 Added "book" to purchases for ${customerEmail}`);
                            }
                        } else {
                            console.log(`⚠️ No user found for email: ${customerEmail}`);
                        }

                        // Save transaction record (idempotent due to unique constraint)
                        try {
                            await Transaction.create({
                                userId: user?._id,
                                email: customerEmail.toLowerCase(),
                                paddleTransactionId: txnData.id,
                                product: "book",
                                status: "completed",
                                amount: txnData.details?.totals?.total || "",
                                currency: txnData.currencyCode || "",
                            });
                        } catch (err) {
                            console.log(`ℹ️ Transaction ${txnData.id} already recorded.`);
                        }
                    } else if (!hasBook) {
                        console.log(`⚠️ Transaction ${txnData.id} does not contain the book product.`);
                    }
                    break;
                }

                // Handle Refunds / Chargebacks
                case EventName.TransactionAdjustmentsCreated: {
                    const adjustmentData = eventData.data;
                    const txnId = adjustmentData.transaction_id;

                    console.log(`↩️ Refund/Adjustment for transaction ${txnId}`);

                    // Find original transaction to get the user
                    const originalTxn = await Transaction.findOne({ paddleTransactionId: txnId });

                    if (originalTxn && originalTxn.product === "book") {
                        const user = await User.findById(originalTxn.userId);
                        if (user) {
                            // Remove "book" from purchases
                            user.purchases = user.purchases.filter(p => p !== "book");
                            await user.save();
                            console.log(`🚫 Revoked book access for ${user.email} due to refund`);

                            // Update transaction status
                            originalTxn.status = "refunded";
                            await originalTxn.save();
                        }
                    }
                    break;
                }
                case EventName.TransactionPaymentFailed:
                    console.log(`❌ Transaction ${eventData.data.id} payment failed`);
                    break;
                default:
                    console.log(`Unhandled event: ${eventData.eventType}`);
            }
        } else {
            console.log('Signature missing in header');
        }
    } catch (error) {
        console.error('Webhook processing error:', error);
    }

    res.status(200).send('Processed webhook event');
};
