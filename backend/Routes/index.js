import express, { Router } from "express";
import authRoutes from "./auth.js"; // <-- add .js extension

const rootRoutes = express.Router();

// Root route
rootRoutes.use("/auth", authRoutes);

export default rootRoutes;