import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
        },
        paddleTransactionId: {
            type: String,
            required: true,
            unique: true,
        },
        product: {
            type: String,
            required: true, // e.g., "book", "toolkit", "course"
        },
        status: {
            type: String,
            default: "completed",
        },
        amount: {
            type: String,
        },
        currency: {
            type: String,
        },
    },
    { timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;
