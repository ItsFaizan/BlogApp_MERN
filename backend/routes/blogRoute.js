import express from "express";
import { CreateBlog, updateblog, getblog, deleteblog, searchBlogs} from "../controllers/blogController.js";
import { verifyToken } from '../middleware/jwt.js';
const blogRoute = express.Router();

blogRoute.post("/upload",verifyToken, CreateBlog);
blogRoute.put("/:id",verifyToken, updateblog);
blogRoute.delete("/:id",verifyToken, deleteblog);
blogRoute.get("/getmyblogs",verifyToken, getblog);
blogRoute.get("/search",verifyToken, searchBlogs);

export default blogRoute;