import dotenv from "dotenv";
dotenv.config({path: "./Backend/.env"});



export const PORT =process.env.PORT || 5002
export const JWT_SECRET = process.env.JWT_SECRET  || "default";