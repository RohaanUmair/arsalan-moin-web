import express from "express";
import { downloadBook, downloadAudiobook } from "../controllers/download.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

// GET /api/downloads/book — auth required + purchase check
router.get("/book", protect, downloadBook);
// GET /api/downloads/audiobook — auth required + purchase check
router.get("/audiobook", protect, downloadAudiobook);


export default router;
