import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected to DB")
}).catch((err)=>{
    console.log(err)
});
const app = express();
app.get('/api/products', (req, res) => {
    res.send(data);
});
app.get('/api/products/:id', (req, res) => {
    const product = data.find(x => x._id == req.params.id);
    if (product) {
        res.send(product);
    }
    else {
        res.status(404).send({ message: "product not found" });
    }
});
app.get('/api/products/slug/:slug', (req, res) => {
    const product = data.find(x => x.slug == req.params.slug);
    if (product) {
        res.send(product);
    }
    else {
        res.status(404).send({ message: "product not found" });
    }
    res.send(data);
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server runs at http://localhost:${port}`);
});