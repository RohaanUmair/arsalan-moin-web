import { Paddle, Environment, EventName } from "@paddle/paddle-node-sdk";

const paddle = new Paddle(process.env.PADDLE_SECRET_TOKEN, {
    environment: Environment.sandbox,
});

export const handlePaddleWebhook = async (req, res) => {
    const signature = req.headers["paddle-signature"] || "";
    // req.body should be raw string/buffer for signature verification
    const rawRequestBody = req.rawBody || "";
    const secretKey = process.env.WEBHOOK_SECRET_KEY || "";

    try {
        if (signature && rawRequestBody) {
            // The `unmarshal` function will validate the integrity of the webhook and return an entity
            const eventData = await paddle.webhooks.unmarshal(
                rawRequestBody,
                secretKey,
                signature
            );

            // Database operations based on event type
            switch (eventData.eventType) {
                case EventName.SubscriptionActivated:
                    console.log(`Subscription ${eventData.data.id} was activated`);
                    // TODO: Add your database logic here
                    break;
                case EventName.SubscriptionCanceled:
                    console.log(`Subscription ${eventData.data.id} was canceled`);
                    // TODO: Add your database logic here
                    break;
                case EventName.TransactionPaid:
                    console.log(`Transaction ${eventData.data.id} was paid`);
                    // TODO: Add your database logic here
                    break;
                default:
                    console.log(`Unhandled event: ${eventData.eventType}`);
            }
        } else {
            console.log("Signature missing in header");
        }
    } catch (error) {
        console.error("Webhook error:", error);
        return res.status(400).json({ error: "Webhook verification failed" });
    }

    // Return a response to acknowledge receipt
    return res.status(200).json({ ok: true });
};
