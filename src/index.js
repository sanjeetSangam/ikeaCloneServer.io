const express = require("express");

const app = express();

const productController = require("./controllers/productController");

app.use(express.json());

app.use("/products", productController);

module.exports = app;
