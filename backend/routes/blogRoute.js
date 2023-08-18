import express from "express";
import { CreateBlog, getallblog, getblog, searchBlogs, getblogdetail} from "../controllers/blogController.js";
import { verifyToken } from '../middleware/jwt.js';
const blogRoute = express.Router();

blogRoute.post("/upload",verifyToken, CreateBlog);
blogRoute.get("/getmyblogs",verifyToken, getblog);
blogRoute.get("/getallblogs",verifyToken, getallblog);
blogRoute.get("/:id",verifyToken, getblogdetail);
blogRoute.get("/search",verifyToken, searchBlogs);

export default blogRoute;