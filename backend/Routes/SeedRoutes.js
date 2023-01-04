import express from "express";
import Product from "../Model/ProductModel.js";
import products from "../data.js";

const seedRouter = express.Router();

seedRouter.get('/',async(req,res)=>{
    await Product.remove({});
    const createdProducts = await Product.insertMany(products);
    res.send({createdProducts});
})

export default seedRouter;