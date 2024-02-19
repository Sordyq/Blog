const mongoose = require("mongoose")
const {Schema, model} = mongoose

const blogSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    }
})

const blogModel = mongoose.model("blog", blogSchema)
module.exports = blogModel