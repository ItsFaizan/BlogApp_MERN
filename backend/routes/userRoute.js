import express from 'express';
import { deleteUser } from '../controllers/userController.js';
import { updateuser } from '../controllers/userController.js';
import { getUser } from '../controllers/userController.js';
import { verifyToken } from '../middleware/jwt.js';
const router = express.Router();

router.delete("/:id",verifyToken, deleteUser)
router.put("/:id",verifyToken, updateuser)
router.get("/get_user_info/:id",verifyToken, getUser)

export default router;