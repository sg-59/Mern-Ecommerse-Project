const router=require('express').Router();
const order= require('../models/order');
const { verifyTokenAdmin, verifyTokenAndAuthorization,verifyToken } = require('./verifyToken');
const Razorpay= require('razorpay')
const helpers=require('./Userhelpers/payment')






router.post('/', async(req,res)=>{
    const neworder=new order(req.body)

    if(req.body.status==='COD'){

        try{
            const savedorder= await neworder.save();
            res.status(201).json(savedorder)
            console.log("enathavam", savedorder)


    }catch(err){
res.status(500).json(err)
    }
    }else{

        const savedorder= await neworder.save();
        res.status(201)
        console.log("enathavam", savedorder)
        helpers.generateRazorpay(savedorder._id,savedorder.amount).then((response)=>{
            res.json(response)
            console.log('response',response);
                });
    }
 


});

router.put("/:id",verifyTokenAdmin,async(req,res)=>{
    try{
const updateorder=await order.findByIdAndUpdate(req.params.id,{
    $set:req.body
},
{new:true}
);
res.status(200).json(updateorder)
    }catch(err){
res.status(500).json(err)
    }
})

router.delete('/:id',async (req,res)=>{
    try{
        await order.findByIdAndDelete(req.params.id)
        res.status(200).json("order deleted")
    }catch(err){
res.status(500).json(err)
    }
   
})

router.get("/find/:userId", async(req,res)=>{
    console.log('***',req.params.userId);
    try{
        const orders=await order.find({userId:req.params.userId})  
        res.status(200).json(orders)
    }catch(err){
        res.status(500).json(err)
    }
 })

 router.get('/', async(req,res)=>{
try{
let allorder=await order.find()
res.status(200).json(allorder)
}catch(err){
    res.status(500).json(err)
}
   
})

//Get monthly income

router.get("/income",verifyTokenAdmin,async(req,res)=>{
    const data= new Date();
    const lastMonth=new Date(date.setMonth(date.getMonth()-1));
    const previousMonth=new Date(new Date().setMonth(lastMonth.getMonth() - 1));
    try{
const income=await order.aggregate([{
    $match:{createdAt:{$gte:previousMonth}}
},
{
    $project:{
        month:{$month:"$createdAt"},
        sales:"$amount"
    },
    
        $group:{
            _id:"$month",
            total:{$sum:"$sales"}
        }
},
])
res.status(200).json(income)
    }catch(err){
        res.status(500).json(err)
    }
})

router.post('/verify',async(req,res)=>{
    console.log('verify in backend',req.body);
helpers.verifyPayment(req.body).then(()=>{
    res.json({status:true})
}).catch((err)=>{
    res.json({status:false})
})
})
module.exports=router