const express=require('express');
const { sample, gettest } = require('../controller/testcontroller');
const router=express();
router.get("/",sample)
router.get("/home",gettest)
module.exports=router;