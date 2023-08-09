const mongoose=require('mongoose')
let movieSchema= new mongoose.Schema({
    name:{ type: String, required: true },
    rating:Number,
    charactername:String,
    discription:String,
    relesedate:String,
    language:String
})
const movie=mongoose.model("movie",movieSchema)
module.exports=movie