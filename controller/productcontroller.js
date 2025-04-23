const Product=require('../model/Productmodel');
const Category=require('../model/Categorymodel');


exports.addproduct=async (req,res)=>{
    try{
        product=await Product.findOne({product_name:req.body.product_name});
        if(!product){
            let productadd=new Product({
                product_name:req.body.product_name,
                price:req.body.price,
                description:req.body.description,
                quantity:req.body.quantity,
                images:req.body.images,
                category:req.body.category,
            });
            productadd=await productadd.save();
           
            // res.send(`we are in ${process.env.port}`);
            if(!productadd){
                res.status(400).json({message:"invalid product data"});
            }
            res.send(productadd);
        }
        else{
            res.status(201).json({error:"product already exists","name":"hello bro"});
        }
    }
    catch(err){
       return res.status(400).json({error:err.message,detail:"product not addeded"}) 
    }
   
   
}


exports.getproduct=async(req,res)=>{
    try{
        let product=await Product.find().populate("category","category_name");
        if(!product){
            res.status(404).json({error:"no product found"});
        }
        return res.status(200).json(product)
        // res.send(product)
}catch(err){
return res.status(400).json({error:"cannot get product"})
}
}

exports.getproductbyid=async(req,res)=>{
    try{
    let product=await Product.findById(req.params.id).populate("category","category_name");
    // let country=req.params.country;
    if(!product){
        res.status(404).json({error:"no product id found"});
    }
    res.send(product)
    // res.status(200).json(category,country)
}catch(err){
    return res.status(400).json({error:"cannot get product id"})
}
}


exports.updateproduct=async(req,res)=>{
    try{

        
        let product=await Product.findByIdAndUpdate(req.params.id,{
            product_name:req.body.product_name,
            price:req.body.price,
            description:req.body.description,
            quantity:req.body.quantity,
            images:req.body.images,
            category:req.body.category,
        },{new:true}
    ).populate("category","category_name");
        if(!product){
           return res.status(404).json({error:"no product id found"});
        }
        return res.status(200).json({category,success:"category updated"});
    }
    catch(err){
        return res.status(400).json({error:"cannot update product"})
    }
}


exports.getproductbyCategoryId=async(req,res)=>{
    try{
        let category=await Category.findById(req.params.id)
        if(!category)
            {return res.status(404).json({message:"category not found"})};
        let product = await Product.find({category:req.params.id}).populate("category","category_name");
        if(!product)
            {return res.status(404).json({message:"product not found"})};
        res.send(product)
    }

    catch(err){
        return res.status(400).json({err:err.message,detail:"category not found"})
    }

}

exports.deleteproduct=async(req,res)=>{
    try{
        let product=await Product.findByIdAndDelete(req.params.id);
        if(!product){
            res.status(404).json({error:"no product id found"});
        }
        return res.status(200).json({success:"product deleted"});
    }
    catch(err){
        return res.status(400).json({error:err.message,detail:"product not deleted"})
    }
}