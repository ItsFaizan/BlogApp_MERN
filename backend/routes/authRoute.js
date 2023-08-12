import express from "express";
import { register, login, logout } from "../controllers/authController.js";
import { verifyToken } from '../middleware/jwt.js';
const authRoute = express.Router();

authRoute.post("/user_register", register)
authRoute.post("/user_login",verifyToken, login)
authRoute.post("/user_logout",verifyToken, logout)

export default authRoute;