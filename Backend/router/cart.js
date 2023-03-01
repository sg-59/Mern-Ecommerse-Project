const router=require('express').Router();
const cart= require('../models/cart');
const { verifyTokenAdmin, verifyTokenAndAuthorization,verifyToken } = require('./verifyToken');


router.post('/',verifyToken, async (req,res)=>{
    const newCart=new cart(req.body)

    try{
        const savedCart= await newCart.save();
        res.status(201).json(savedCart)
        console.log(savedCart);
    }catch(err){
res.status(500).json(err)
    }
})

router.put("/:id",verifyTokenAndAuthorization,async(req,res)=>{
    try{
const updatecart=await cart.findByIdAndUpdate(req.params.id,{
    $set:req.body
},
{new:true}
);
console.log(updatecart);
res.status(200).json(req.body)
    }catch(err){
res.status(500).json(err)
    }
})

router.delete('/:id',verifyTokenAndAuthorization,async (req,res)=>{
    try{
        await cart.findByIdAndDelete(req.params.id)
        res.status(200).json("cart deleted")
    }catch(err){
res.status(500).json(err)
    }
   
})

router.get("/find/:userId",verifyTokenAndAuthorization, async(req,res)=>{
    try{
        const carts=await cart.findOne({userId:req.params.userId})  
        res.status(200).json(carts)
    }catch(err){
        res.status(500).json(err)
    }
 })

 router.get('/',verifyTokenAdmin, async(req,res)=>{
try{
let allcart=await cart.find()
res.status(200).json(allcart)
}catch(err){
    res.status(500).json(err)
}
   
})

module.exports=router