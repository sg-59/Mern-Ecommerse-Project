const router=require('express').Router();
const mensproduct = require('../models/mensproduct');
const { verifyTokenAdmin } = require('./verifyToken');


router.post('/',verifyTokenAdmin, async (req,res)=>{
    const newitem=new mensproduct(req.body)

    try{
        const saveditems= await newitem.save();
        res.status(201).json(saveditems)
    }catch(err){
res.status(500).json(err)
    }
})

router.put("/:id",verifyTokenAdmin,async(req,res)=>{
    try{
const updateproduct=await mensproduct.findByIdAndUpdate(req.params.id,{
    $set:req.body
},
{new:true}
);
res.status(200).json(updateproduct)
    }catch(err){
res.status(500).json(err)
    }
})

router.delete('/:id',verifyTokenAdmin,async (req,res)=>{
    try{
        await mensproduct.findByIdAndDelete(req.params.id)
        res.status(200).json("item deleted")
    }catch(err){
res.status(500).json(err)
    }
   
})

router.get("/find/:id",async(req,res)=>{
    try{
        const products=await mensproduct.findById(req.params.id)  
        res.status(200).json(products)
    }catch(err){
        res.status(500).json(err)
    }
 })

 router.get('/', async(req,res)=>{
    const qNew=req.query.new;
    const qCategory=req.query.category
    try{
        let mensproducts;
        if(qNew){
            mensproducts= await mensproduct.find().sort({createdAt:-1}).limit(1)
        }else if(qCategory){
            mensproducts=await mensproduct.find({categories:{
                $in:[qCategory],
            }});
        }else{
            mensproducts=await mensproduct.find();
        }
      
        res.status(200).json(mensproducts)
    }catch(err){
res.status(500).json(err)
    }
   
})


module.exports=router