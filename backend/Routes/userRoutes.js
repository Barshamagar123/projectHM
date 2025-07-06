import express from "express";
import { authMiddleware } from "../Middlewares/authMiddlewares.js";
import authorizationMiddleware from "../Middlewares/rolesMiddleware.js";



const userRoutes =express.Router();

// Route to get admin dashboard
// This route is protected and can only be accessed by users with the 'admin' role
userRoutes.get("/admin", authMiddleware, authorizationMiddleware("admin"), (req, res) => {
    res.send("Admin dashboard")
})


//route to get teacher dashboard
// This route is protected and can only be accessed by users with the 'teacher' role
userRoutes.get("/teacher", authMiddleware, authorizationMiddleware("teacher"), (req, res) => {
    res.send("Teacher dashboard")
})





// Route to get student dashboard
// This route is protected and can only be accessed by users with the 'student' role
userRoutes.get("/student", authMiddleware, authorizationMiddleware("student"), (req, res) => {
    res.send("Student dashboard")
})



export default userRoutes;