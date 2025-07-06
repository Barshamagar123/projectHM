import express, { Router } from "express"
import asyncHandler from "express-async-handler" 
import { login, signup } from "../Controllers/auth.js";




const authRoutes =Router();

// Route for user signup
authRoutes.post("/signup", asyncHandler(signup));
authRoutes.post("/login",asyncHandler(login))



// Example of using asyncHandler for error handling




export default authRoutes;
