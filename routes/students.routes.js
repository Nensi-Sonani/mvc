const{Router}=require("express");
const{std}=require("../controllers/students.controlers")
const{check}=require('../middleware/students.middleware')
let router=Router();
router.get("/",(req,res)=>{
    res.send("home page")
})

router.get("/form",(req,res)=>{
    res.render("index")
})

router.get("/login",(req,res)=>{
    res.render("login page")
})

router.get("/signup",(req,res)=>{
    res.send("signup page")
})

router.post("/add",check,std)
module.exports=router