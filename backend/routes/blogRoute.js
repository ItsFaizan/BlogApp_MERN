import express from "express";
import { CreateBlog, getallblog, getblog, searchBlogs} from "../controllers/blogController.js";
import { verifyToken } from '../middleware/jwt.js';
const blogRoute = express.Router();

blogRoute.post("/upload",verifyToken, CreateBlog);
blogRoute.get("/getmyblogs",verifyToken, getblog);
blogRoute.get("/getallblogs",verifyToken, getallblog);
blogRoute.get("/search",verifyToken, searchBlogs);

export default blogRoute;