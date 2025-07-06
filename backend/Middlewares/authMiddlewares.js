import express from "express";

import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../sercrets.js";





export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (authHeader && authHeader.startsWith("Bearer ")) {
        const token = authHeader.split(" ")[1];

        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            req.user = decoded; // attach user info to request
            return next();
        } catch (error) {
            return res.status(403).json({ message: "Invalid token" });
        }
    }

    return res.status(401).json({ message: "Unauthorized: No token provided" });
};
