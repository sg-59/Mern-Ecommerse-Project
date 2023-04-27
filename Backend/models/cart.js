const mongoose = require("mongoose");

const cartschema = new mongoose.Schema(
  {
    userId:{type:String},
      id: { type: String },
      title: { type: String, required: true },
      desc: { type: String, required: true },
      img: { type: String, required: true },
      categories: { type: Array },
      size: { type: Array },
      color: { type: Array },
      price: { type: Number, required: true },
   quantity: { type: Number, required: true },   
  },
  { timestamps: true }
);

module.exports = mongoose.model("cart", cartschema);

