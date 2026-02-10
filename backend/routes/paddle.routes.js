import express from 'express';
import { handlePaddleWebhook } from '../controllers/paddle.controller.js';

const router = express.Router();

// Paddle webhook endpoint
router.post('/webhooks', handlePaddleWebhook);

export default router;
