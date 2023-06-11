const router = require("express").Router();
const { json } = require("body-parser");
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  console.log('backend signup',req.body);
  const userdata = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.CRYPTO_JS
    ).toString(),
});
console.log('userdata',userdata);
  try { 
    const saveduser = await userdata.save();
    console.log('saved User',saveduser);
    console.log(saveduser);
    res.status(201).json(saveduser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  console.log("user ?", req.body);
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong credentials !");

    const hashedpassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.CRYPTO_JS
    );
    const orginalpassword = hashedpassword.toString(CryptoJS.enc.Utf8);
    console.log(orginalpassword);

    orginalpassword !== req.body.password &&
      res.status(401).json("invalid password");
    const accesstoken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;
    // res.cookie("verifyToken", accesstoken, {
    //   httpOnly: true,
    // });

    res.status(200).json({ ...others, accesstoken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
