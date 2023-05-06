const router=require('express').Router();
const kidsproduct = require('../models/kidsproduct');
const { verifyTokenAdmin, verifyToken } = require('./verifyToken');


router.post('/',verifyToken, async (req,res)=>{
    const newitem=new kidsproduct(req.body)

    try{
        const saveditems= await newitem.save();
        res.status(201).json(saveditems)
        console.log(saveditems);
    }catch(err){
res.status(500).json(err)
    }
})

router.put("/:id",verifyToken, async(req,res)=>{

    console.log('?',req.body);
    try{
const updateproduct=await kidsproduct.findByIdAndUpdate(req.params.id,{
    $set:req.body
},
{new:true}
);
res.status(200).json(updateproduct)
    }catch(err){
res.status(500).json(err)
    }
})

router.delete('/:id',verifyToken, async (req,res)=>{
    try{
        await kidsproduct.findByIdAndDelete(req.params.id)
        res.status(200).json("item deleted")
    }catch(err){
res.status(500).json(err)
    }
   
})

router.get("/find/:id",async(req,res)=>{
    try{
        const products=await kidsproduct.findById(req.params.id)  
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
            products= await kidsproduct.find().sort({createdAt:-1}).limit(1)
        }else if(qCategory){
            products=await kidsproduct.find({categories:{
                $in:[qCategory],
            }});
        }else{
            products=await kidsproduct.find();
        }
      
        res.status(200).json(products)
    }catch(err){
res.status(500).json(err)
    }
   
})


module.exports=router