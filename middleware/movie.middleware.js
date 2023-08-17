const check=(req,res,next)=>{
    let{name,charactername,language}=req.body;
    if(name&&charactername&&language){
        next()
    }else{
        res.send("enter a valid details")
    }
}
module.exports=check;