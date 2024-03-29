const mongoose = require("mongoose");

const orderschema = new mongoose.Schema(
  {
    userId: { type: String, require: true },

    products:[{
        productId: {
          type: Array,
        },
        quantity: {
          type: Number,
          default: 1,
        }
   } ],
    amount: { type: Number, require: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderschema);
