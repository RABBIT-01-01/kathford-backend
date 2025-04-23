const Category=require('../model/Categorymodel')


exports.addcategory=async (req,res)=>{
    try{
        category=await Category.findOne({category_name:req.body.category_name});
        if(!category){
            let categoryadd=new Category({
                category_name:req.body.category_name
            });
            categoryadd=await categoryadd.save();
           
            // res.send(`we are in ${process.env.port}`);
            if(!categoryadd){
                res.status(400).json({error:"error"})
            }
            res.send(categoryadd);
        }
        else{
            res.status(201).json({error:"category already exists","name":"hello bro"});
        }
    }
    catch(err){
       return res.status(400).json({error:err.message,detail:"category not addeded"}) 
    }
   
   
}

exports.getcategory=async(req,res)=>{
    let category=await Category.find();
    if(!category){
        res.status(404).json({error:"no category found"});
    }
    res.send(category)
}

exports.getcategorybyid=async(req,res)=>{
    let category=await Category.findById(req.params.id);
    let country=req.params.country;
    if(!category){
        res.status(404).json({error:"no category id found"});
    }
    res.send(category)
    // res.status(200).json(category,country)
}


exports.updatecategory=async(req,res)=>{
    let category=await Category.findByIdAndUpdate(req.params.id,{category_name:req.body.category_name},{new:true});
    if(!category){
        res.status(404).json({error:"no category id found"});
    }
    res.status(200).json({category,success:"category updated"});
}

exports.deletecategory=async(req,res)=>{
    let category=await Category.findByIdAndDelete(req.params.id);
    if(!category){
        res.status(404).json({error:"no category id found"});
    }
    res.send(category)
}