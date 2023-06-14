const router = require("express").Router();
const { json } = require("body-parser");
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const multer=require('multer');


const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'../frondent/public/Uploads/');
  },
  filename:(req,file,cb)=>{
    cb(null,file.originalname)
  } 
})

const upload=multer({storage:storage});

router.post("/signup",upload.single('Images') ,(req, res) => {
  console.log('backend',req.body);
  console.log('backend Images',req.file);
  const userdata = new User({
    username: req.body.username,
    email: req.body.email,
    mobile: req.body.mobile,
    address: req.body.address,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.CRYPTO_JS
    ).toString(),
    Images:req.file.originalname,
    isAdmin:req.body.isAdmin,
   

});
console.log('userdata',userdata);
  try {  
    const saveduser =  userdata.save();
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
