const mongoose = require("mongoose");

const userschema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: Number, required: true, unique: true },
    address: { type: String, required: true },
    password: { type: String, required: true },
    Images:{type:String,required:true},
    isAdmin:{default:false}
   

  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userschema);
