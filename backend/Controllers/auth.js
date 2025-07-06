import { compareSync, hashSync } from 'bcrypt';
import  jwt  from 'jsonwebtoken';
import User from '../Models/userModel.js';

import { JWT_SECRET } from '../sercrets.js';

export const signup = async (req, res) => {
    console.log("Signup request received:", req.body);
    
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password || !role) {
            console.log("Missing required fields:", { name: !!name, email: !!email, password: !!password, role: !!role });
            return res.status(400).json({ message: "All fields are required" });
        }

        console.log("Checking for existing user with email:", email);
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            console.log("User already exists with email:", email);
            return res.status(400).json({ message: "User already exists" });
        }

        console.log("Creating new user...");
        const user = await User.create({
            name,
            email,
            password: hashSync(password, 10),
            role: role === "admin" || role === "teacher" ? role : "student"
        });

        console.log("User created successfully:", { id: user._id, email: user.email, role: user.role });
        res.status(201).json({ status: true, message: "User created successfully", user });
    } catch (error) {
        console.error("Signup Error:", error.message, error.stack);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};




const MAX_LOGIN_ATTEMPTS = 5;
const LOCK_TIME = 15 * 60 * 1000; // 15 minutes

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log("Login attempt:", email);

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email });
        console.log("User found:", user);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        console.log("User isLocked:", user.isLocked);

        if (user.isLocked) {
            return res.status(403).json({ message: "Account is temporarily locked. Try again later." });
        }

        const isMatch = compareSync(password, user.password);
        console.log("Password match:", isMatch);

        if (!isMatch) {
            user.loginAttempts += 1;
            if (user.loginAttempts >= 5) {
                user.lockUntil = new Date(Date.now() + 15 * 60 * 1000);
            }
            await user.save();
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Reset lock and login attempts
        user.loginAttempts = 0;
        user.lockUntil = undefined;
        await user.save();

        const token = jwt.sign(
            { userId: user._id, role: user.role },
            JWT_SECRET,
            { expiresIn: '30d' }
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'Lax',
            maxAge: 30 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            status: true,
            message: "Login successful",
            token
        });

    } catch (error) {
        console.error("Login Error:", error.message, error.stack);
        return res.status(500).json({ message: "Internal server error" });
    }
};




export const logout = async (req, res) => {
    try {
        res.clearCookie('token');
        return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.error("Logout Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

