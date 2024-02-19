const blogModel = require("../Model/blog")

const createBlog = async (req, res) =>{
    const {title, content, author} = req.body
    try{
        const newBlog = new blogModel({title, content, author})
        const savedBlog = await newBlog.save()
        return res.status(201).json({msg: "New blog created"})
    } catch (error){
        console.error(error)
        return res.status(500).json({error: "Server error"})
    }
}

const getBlog = async (req, res) =>{
    try{
        const getBlog = await blogModel.find()
        res.json(getBlog)
    } catch (error){
        console.error(error)
        return res.status(500).json({error: "Server error"})
    }
}

const singleBlog = async (req,res) =>{
    try{
        const blogId = req.params.blogId;
        const blog = await blogModel.findOne(blogId)
        if(!blog){
            return res.status(404).json({error: "Blog not found"})
        }
        res.json(blog);
    } catch (error){
        console.error(error)
        return res.status(500).json({error: "Server error"})
    }
}

const updateBlog = async (req, res)=>{
    try{
        const blogId = req.params["id"]
        const {title, content, author} = req.body;
        const updatedBlog = await blogModel.findOneAndUpdate({_id:blogId}, req.body,
            {new:true, runValidators:true});
        if(!updatedBlog){
            return res.status(404).json({error: "Blog not found"})
        }
        res.json(updatedBlog)
    } catch (error){
        console.error(error)
        return res.status(500).json({error: "Server error"})
    }
}

const deleteBlog = async (req,res)=>{
    const _id = req.params["id"];
    const sameId = await blogModel.findById({_id});
    if(sameId){
        await blogModel.findOneAndDelete({_id});
        return res.json({msg: "Blog deleted successfully"})
    }
    res.json({error: "No blog found"})
}

module.exports = {
    createBlog,
    getBlog,
    singleBlog,
    updateBlog,
    deleteBlog
}