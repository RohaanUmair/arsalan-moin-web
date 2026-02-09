import express from "express";
import { handlePaddleWebhook } from "../controllers/paddle.controller.js";

const router = express.Router();

// Paddle webhook endpoint
router.post("/webhook", handlePaddleWebhook);

export default router;
