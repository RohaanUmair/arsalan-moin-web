import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { validatePassword, validateEmail } from "../utils/validators.utils.js";

// Generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Cookie options
const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

/**
 * POST /api/auth/register
 */
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate fields
        if (!name || !email || !password) {
            return res
                .status(400)
                .json({ success: false, message: "All fields are required" });
        }

        if (!validateEmail(email)) {
            return res
                .status(400)
                .json({ success: false, message: "Invalid email format" });
        }

        const passwordCheck = validatePassword(password);
        if (!passwordCheck.isValid) {
            return res
                .status(400)
                .json({ success: false, message: passwordCheck.errors.join(". ") });
        }

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res
                .status(400)
                .json({ success: false, message: "Email already registered" });
        }

        // Create user
        const user = await User.create({ name, email, password });
        const token = generateToken(user._id);

        res.cookie("token", token, cookieOptions);
        res.status(201).json({
            success: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                purchases: user.purchases,
            },
            token,
        });
    } catch (error) {
        console.error("Register error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

/**
 * POST /api/auth/login
 */
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res
                .status(400)
                .json({ success: false, message: "Email and password are required" });
        }

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res
                .status(401)
                .json({ success: false, message: "Invalid email or password" });
        }

        // Compare password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res
                .status(401)
                .json({ success: false, message: "Invalid email or password" });
        }

        const token = generateToken(user._id);

        res.cookie("token", token, cookieOptions);
        res.json({
            success: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                purchases: user.purchases,
            },
            token,
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

/**
 * GET /api/auth/me
 */
export const getMe = async (req, res) => {
    try {
        res.json({
            success: true,
            user: {
                id: req.user._id,
                name: req.user.name,
                email: req.user.email,
                purchases: req.user.purchases,
            },
        });
    } catch (error) {
        console.error("GetMe error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

/**
 * POST /api/auth/logout
 */
export const logout = async (req, res) => {
    res.cookie("token", "", { ...cookieOptions, maxAge: 0 });
    res.json({ success: true, message: "Logged out successfully" });
};
