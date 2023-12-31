import express from 'express';
import { updateuser } from '../controllers/userController.js';
import { getUser } from '../controllers/userController.js';
import { getUserdetail } from '../controllers/userController.js';
import { verifyToken } from '../middleware/jwt.js';
const userRoute = express.Router();

userRoute.put("/:id",verifyToken, updateuser)
userRoute.get("/get_user_info",verifyToken, getUser)
userRoute.get("/:id",verifyToken, getUserdetail)


export default userRoute;