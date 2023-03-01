const router=require('express').Router();
const product = require('../models/product');
const { verifyTokenAdmin } = require('./verifyToken');


router.post('/',verifyTokenAdmin, async (req,res)=>{
    const newitem=new product(req.body)

    try{
        const saveditems= await newitem.save();
        res.status(201).json(saveditems)
        console.log(saveditems);
    }catch(err){
res.status(500).json(err)
    }
})

router.put("/:id",verifyTokenAdmin,async(req,res)=>{
    try{
const updateproduct=await product.findByIdAndUpdate(req.params.id,{
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
        await product.findByIdAndDelete(req.params.id)
        res.status(200).json("item deleted")
    }catch(err){
res.status(500).json(err)
    }
   
})

router.get("/find/:id",async(req,res)=>{
    try{
        const products=await product.findById(req.params.id)  
        res.status(200).json(products)
    }catch(err){
        res.status(500).json(err)
    }
 })

 router.get('/', async(req,res)=>{
    const qNew=req.query.new;
    const qCategory=req.query.category
    try{
        let products;
        if(qNew){
            products= await product.find().sort({createdAt:-1}).limit(1)
        }else if(qCategory){
            products=await product.find({categories:{
                $in:[qCategory],
            }});
        }else{
            products=await product.find();
        }
      
        res.status(200).json(products)
    }catch(err){
res.status(500).json(err)
    }
   
})


module.exports=router