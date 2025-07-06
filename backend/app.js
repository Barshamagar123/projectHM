import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/db.js";
import cors from "cors";


import Register from "./Models/userModel.js";
import rootRoutes from "./Routes/app.js";
import { PORT } from "./sercrets.js";
import cookieParser from "cookie-parser";

// Load environment variables first
dotenv.config();

const app= express();

app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

app.use("/api", rootRoutes);

app.get("/",(request,response)=>{
    response.send("Hello World")
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ message: 'Internal server error', error: err.message });
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})


