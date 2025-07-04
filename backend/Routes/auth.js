import express, { Router } from "express"
import asyncHandler from "express-async-handler" 
import { signup } from "../Controllers/auth.js";




const authRoutes =express.Router();

authRoutes.get("/signup",asyncHandler(signup))



// Example of using asyncHandler for error handling




export default authRoutes;
