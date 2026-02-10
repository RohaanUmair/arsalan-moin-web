import express from "express";
import { register, login, getMe, logout } from "../controllers/auth.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { loginLimiter } from "../middlewares/rateLimiter.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", loginLimiter, login);
router.get("/me", protect, getMe);
router.post("/logout", logout);

export default router;
