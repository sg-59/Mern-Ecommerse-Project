const User = require('../models/User');
const { verifyTokenAndAuthorization, verifyTokenAdmin } = require('./verifyToken');
const CryptoJS=require('crypto-js')

const router=require('express').Router();

router.put("/:id",verifyTokenAndAuthorization,async(req,res)=>{
    if(req.body.password){
        req.body.password=CryptoJS.AES.encrypt(req.body.password,process.env.CRYPTO_JS).toString() 
    }

    try{
const updateUser=await User.findByIdAndUpdate(req.params.id,{
    $set:req.body
},
{new:true}
);
res.status(200).json(updateUser)
    }catch(err){
res.status(500).json(err)
    }
})

router.delete('/:id',verifyTokenAndAuthorization,async (req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("item deleted")
    }catch(err){
res.status(500).json(err)
    }
   
})

router.get("/find/:id",verifyTokenAdmin,async(req,res)=>{
    try{
        const user=await User.findById(req.params.id)  
        const {password,...others} =user._doc;
        res.status(200).json(others)
    }catch(err){
        res.status(500).json(err)
    }
 

})
router.get('/',verifyTokenAdmin,async(req,res)=>{
    const query=req.query.new;
    try{
        const alluser=query ? await User.find().sort({_id:-1}).limit(1):
        await User.find();
        console.log("ok all",alluser);
        res.status(200).json(alluser)
    }catch(err){
res.status(500).json(err)
    }
   
})


module.exports=router 