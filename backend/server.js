import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import seedRouter from "./Routes/SeedRoutes.js";
import productRouter from "./Routes/ProductRoutes.js";
dotenv.config();
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected to DB")
}).catch((err)=>{
    console.log(err)
});
const app = express();
app.use('/api/seed',seedRouter);
app.use('/api/products',productRouter);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server runs at http://localhost:${port}`);
});

