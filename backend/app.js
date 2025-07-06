import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/db.js";
import cors from "cors";


import Register from "./Models/userModel.js";
import rootRoutes from "./Routes/app.js";
import { PORT } from "./sercrets.js";
import cookieParser from "cookie-parser";
const app= express();
app.use(cookieParser)
app.use(cors({
    credentials:true,
    orgin:"http://localhost:5173"

}))

app.use(express.json());
dotenv.config();
// Connect to MongoDB
connectDB();


app.use("/api",rootRoutes);


app.use(express.urlencoded({ extended: true }));


app.get("/",(request,response)=>{
    response.send("Hello World")
})





app.listen(PORT,()=>{
    console.log(`Server is running on port `);
})


