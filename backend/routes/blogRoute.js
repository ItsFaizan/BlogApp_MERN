import express from "express";
import { CreateBlog, updateblog, getblog, deleteblog, searchBlogs} from "../controllers/blogController.js";

const router = express.Router();

router.post("/upload",verifyToken, CreateBlog);
router.put("/:id",verifyToken, updateblog);
router.delete("/:id",verifyToken, deleteblog);
router.get("/:id",verifyToken, getblog);
router.get("/search",verifyToken, searchBlogs);

export default router;