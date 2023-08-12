import express from "express";
import { register, login, logout } from "../controllers/authController.js";

const router = express.Router();

router.post("/user_register", register)
router.post("/user_login",verifyToken, login)
router.post("/user_logout",verifyToken, logout)

export default router;