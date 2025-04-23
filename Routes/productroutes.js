 const express=require('express');
 const { addproduct, getproduct, getproductbyid, getproductbyCategoryId, deleteproduct,updateproduct} = require('../controller/productcontroller');
 const router=express.Router();
 router.post("/productadd",addproduct)
 router.get("/",getproduct)

 router.get("/:id",getproductbyid)
 router.get("/category/:id",getproductbyCategoryId)
 router.delete("/deletecategory/:id",deleteproduct)    
 router.put("/updatecategory/:id",updateproduct)
 module.exports=router;