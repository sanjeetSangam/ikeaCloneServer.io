const express = require("express");
const router = express.Router();

const Product = require("../models/product.model");

router.get("", async (req, res) => {
  try {
    const product = await Product.find().lean().exec();
    return res.status(200).send(product);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

module.exports = router;
