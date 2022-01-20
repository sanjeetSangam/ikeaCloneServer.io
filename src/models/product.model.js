const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    img1: { type: String, required: false },
    img2: { type: String, required: false },
    title: { type: String, required: false },
    des: { type: String, required: false },
    price: { type: String, required: false },
    varient: { type: String, required: false },
    vimg1: { type: String, required: false },
    vimg2: { type: String, required: false },
    vimg3: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
