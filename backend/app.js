import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/db.js";
const app=express();
dotenv.config();
// Connect to MongoDB
connectDB();




app.get("/",(request,response)=>{
    response.send("Hello World")
})



const PORT=process.env.PORT || 5002;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})


