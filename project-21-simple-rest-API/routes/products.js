// routes/products.js
const express = require("express");
const router = express.Router();

const products = [
  { id: 1, name: "Laptop", price: 899 },
  { id: 2, name: "Headphones", price: 199 },
  { id: 3, name: "Smartwatch", price: 299 },
];

router.get("/", (req, res) => {
  res.json(products);
});

router.post("/", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json({
    message: "Product added successfully",
    product: newProduct,
  });
});

module.exports = router;
