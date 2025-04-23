exports.sample=(req,res)=>{
    res.send(`we are in ${process.env.port}`);
     }
exports.gettest=(req,res)=>{
    res.send(`test ${process.env.port}`);
     }

