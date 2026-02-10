import { Paddle, EventName } from '@paddle/paddle-node-sdk';

// Initialize Paddle SDK
const paddle = new Paddle(process.env.PADDLE_API_KEY);

/**
 * Handle Paddle webhook events
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const handlePaddleWebhook = async (req, res) => {
    const signature = req.headers['paddle-signature'] || '';
    const rawRequestBody = req.rawBody ? req.rawBody.toString() : '';
    const secretKey = process.env.PADDLE_WEBHOOK_SECRET || '';

    try {
        if (signature && rawRequestBody) {
            // Validate webhook integrity and get event data
            const eventData = await paddle.webhooks.unmarshal(rawRequestBody, secretKey, signature);

            switch (eventData.eventType) {
                case EventName.TransactionCompleted:
                    console.log(`✅ Transaction ${eventData.data.id} completed`);
                    // TODO: Handle successful payment - update user's purchase status in DB
                    break;
                case EventName.TransactionPaymentFailed:
                    console.log(`❌ Transaction ${eventData.data.id} payment failed`);
                    // TODO: Handle failed payment
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

    // Always acknowledge receipt
    res.status(200).send('Processed webhook event');
};
