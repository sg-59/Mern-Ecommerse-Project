const mongoose=require('mongoose')

const productschema=new mongoose.Schema({
  title:{type:String,require:true},
  desc:{type:String,require:true},
  img:{type:String,require:true},
  categories:{type:Array},
  size:{type:String,require:true},
  color:{type:String,require:true},
  price:{type:String,require:true},
},
{timestamps:true});

module.exports=mongoose.model("product",productschema)