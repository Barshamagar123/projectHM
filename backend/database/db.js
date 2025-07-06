import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        console.log("Attempting to connect to MongoDB...");
        console.log("Database URL:", process.env.DATABASE_URL);
        
        await mongoose.connect(process.env.DATABASE_URL, {      
        });
        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        console.error("Full error:", error);
        process.exit(1);
    }
};