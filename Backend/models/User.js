const mongoose = require("mongoose");

const userschema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    // email: { type: String, required: true, unique: true },
    // isAdmin: { type: Boolean, default: false },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userschema);
