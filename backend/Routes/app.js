import express, { Router } from "express";
import authRoutes from "./auth.js"; 
import userRoutes from "./userRoutes.js"; 

const rootRoutes = express.Router();

// Root route
rootRoutes.use("/auth", authRoutes);
rootRoutes.use("/user", userRoutes);

export default rootRoutes;