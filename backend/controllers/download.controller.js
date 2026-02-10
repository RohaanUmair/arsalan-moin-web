import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * GET /api/downloads/book
 * Protected: requires auth + "book" in purchases
 */
export const downloadBook = async (req, res) => {
    try {
        // Check if user has purchased the book
        if (!req.user.purchases.includes("book")) {
            return res.status(403).json({
                success: false,
                message: "You have not purchased this book",
            });
        }

        const filePath = path.join(__dirname, "..", "assets", "the-invisible-work.pdf");

        // Check if file exists
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({
                success: false,
                message: "File not found. Please contact support.",
            });
        }

        // Set headers and stream file
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader(
            "Content-Disposition",
            'attachment; filename="The-Invisible-Work-by-Arsalan-Moin.pdf"'
        );

        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
    } catch (error) {
        console.error("Download error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

/**
 * GET /api/downloads/audiobook
 * Protected: requires auth + "book" in purchases
 */
export const downloadAudiobook = async (req, res) => {
    try {
        // Check if user has purchased (bundle includes both)
        if (!req.user.purchases.includes("book")) {
            return res.status(403).json({
                success: false,
                message: "You have not purchased the digital bundle",
            });
        }

        const filePath = path.join(__dirname, "..", "assets", "the-invisible-work.mp3");

        // Check if file exists
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({
                success: false,
                message: "Audio file not found. Please contact support.",
            });
        }

        // Set headers and stream file
        res.setHeader("Content-Type", "audio/mpeg");
        res.setHeader(
            "Content-Disposition",
            'attachment; filename="The-Invisible-Work-Audiobook.mp3"'
        );

        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
    } catch (error) {
        console.error("Audio download error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

