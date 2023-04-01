const mongoose = require("mongoose");

const mensproductschema = new mongoose.Schema(
  {
    id: { type: Number },
    title: { type: String, require: true },
    desc: { type: String, require: true },
    img: { type: String, require: true },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, require: true },
    inStoke: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("mensproduct", mensproductschema);
