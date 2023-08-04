const mongoose=require('mongoose')
let studentSchema=new mongoose.Schema({
    name:String,
    number:Number,
    course:String,
    grid:Number,
    city:String
})
const stud=mongoose.model("stud",studentSchema)
module.exports=stud