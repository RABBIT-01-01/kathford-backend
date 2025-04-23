const mongoose=require('mongoose');
const Productschema=new mongoose.Schema({
    product_name:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
    },
    quantity:{
        type:Number,
    },
    images:{
        type:String,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category",
        required:true,
    },
},{timestamps:true});
module.exports=mongoose.model("products",Productschema)