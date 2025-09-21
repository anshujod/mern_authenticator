import express from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';

import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON requests
app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse incoming cookies

// Auth routes
app.use("/api/auth", authRoutes);

// Start server
app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port:", PORT);
});
