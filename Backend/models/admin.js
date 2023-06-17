const mongoose =require('mongoose')

const adminschema=new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true}, 
    mobile:{type:Number,required:true},
    address:{type:String,required:true},
    password:{type:String,required:true},
    images:{type:String,required:true},
},{timestamps:true})


module.exports=mongoose.model('admin',adminschema)