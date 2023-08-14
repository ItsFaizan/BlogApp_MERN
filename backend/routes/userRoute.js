import express from 'express';
import { deleteUser } from '../controllers/userController.js';
import { updateuser } from '../controllers/userController.js';
import { getUser } from '../controllers/userController.js';
import { verifyToken } from '../middleware/jwt.js';
const userRoute = express.Router();

userRoute.delete("/:id",verifyToken, deleteUser)
userRoute.put("/:id",verifyToken, updateuser)
userRoute.get("/get_user_info",verifyToken, getUser)

export default userRoute;