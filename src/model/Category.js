import mongoose from "mongoose";

const categorySchema=new mongoose.Schema({

 categoryName:{
    type:String
 },
})

const category=mongoose.model("category",categorySchema)


export default category