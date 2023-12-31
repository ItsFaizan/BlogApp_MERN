import express from "express";
import { CreateBlog, getallblog, getblog, searchBlogs, getblogdetail, addclap} from "../controllers/blogController.js";
import { sendEmailToAuthor } from "../controllers/emailController.js";
import { verifyToken } from '../middleware/jwt.js';
const blogRoute = express.Router();

blogRoute.post("/upload",verifyToken, CreateBlog);
blogRoute.get("/getmyblogs",verifyToken, getblog);
blogRoute.get("/getallblogs",verifyToken, getallblog);
blogRoute.get("/:id",verifyToken, getblogdetail);
blogRoute.post("/:id/clap",verifyToken, addclap);
blogRoute.post("/:id/comments",verifyToken, addclap);
blogRoute.post("/send-email",verifyToken, sendEmailToAuthor);
blogRoute.get("/search",verifyToken, searchBlogs);

export default blogRoute;