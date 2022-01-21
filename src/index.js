const express = require("express");

const app = express();

const productController = require("./controllers/productController");
const { register, login } = require("./controllers/auth.controller");

app.use(express.json());

app.use("/products", productController);
app.post("/register", register);
app.post("/login", login);

module.exports = app;



