import express from "express";
import data from "../data.js";
import Product from "../models/Product.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  //seed for products
  await Product.deleteMany({});
  const createdProduct = await Product.insertMany(data.products);
  res.status(201).json(createdProduct);
});

export default seedRouter;
