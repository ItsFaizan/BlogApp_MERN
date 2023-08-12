import Blog from "../models/blogModel";

export const CreateBlog = async (req, res,next) => {
    try {
        const blog = await Blog.create({
            title: req.body.title,
            content: req.body.content,
            images: req.body.images,
            
        });
  
      await blog.save();
      res.status(201).send("Blog has been created.");
    } catch (err) {
      next(err);
    }
  };

  export const updateblog = async (req, res) => {
    try{
    const blog = await Blog.updateOne(
        {_id:req.params.id},
        {$set:{
            title: req.body.title,
            content: req.body.content,
            images: req.body.images,
        }})
        if(blog){
            res.json(blog)
        }
        else{
            res.status(404).json('Blog not found')
        }
    }catch(err){
        console.log(err)
        res.status(500).json({error: "Can't update Blog"})
    }

};

export const deleteblog = async (req, res) => {
    
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).send("Blog deleted.");

};

export const getblog = async (req, res) => {
    const user = await Blog.findById(req.params.id);
    res.json({user});
  };

export const searchBlogs = async (req, res, next) => {
  try {
    const { query } = req.query;

    if (!query) {
      res.status(400).json({ error: 'Search query is missing.' });
      return;
    }

    const blogs = await Blog.find({ title: { $regex: query, $options: 'i' } });

    res.status(200).json(blogs);
  } catch (err) {
    next(err);
  }
};
