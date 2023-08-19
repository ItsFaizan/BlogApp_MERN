import Blog from "../models/blogModel.js";

export const CreateBlog = async (req, res,next) => {
    try {
        const userid = req.userid;
        const blog = await Blog.create({
            content: req.body.content,
            author: userid,
            
        });
  
      await blog.save();
      res.status(201).send("Blog has been created.");
    } catch (err) {
      next(err);
    }
  };


export const getblog = async (req, res) => {
    const userid = req.userid;
    const blogs = await Blog.find({ author: userid });
    res.json(blogs);
  };

  export const getallblog = async (req, res) => {
    const loggedInUserId = req.userid;
    const blogs = await Blog.find({ author: { $ne: loggedInUserId } });
    res.json(blogs);
  };

  export const getblogdetail = async (req, res) => {
    const blogId = req.params.id;
    const blogDetail = await Blog.findById(blogId);
    res.json(blogDetail);
  };

  export const addclap = async (req, res) => {
    try {
      const { id } = req.params;
      const blog = await Blog.findById(id);
      blog.claps += 1;
      await blog.save();
  
      // Return a success response to the client
      res.status(200).json({ message: 'Clap added successfully', claps: blog.claps });
    } catch (error) {
      // Return an error response in case of any issues
      res.status(500).json({ message: 'Error adding clap' });
    }
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
