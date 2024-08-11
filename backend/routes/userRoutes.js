import express from 'express';
import { getUsers, loginUser, logoutUser, signupUser } from '../controllers/userController.js';
import protectRoute from '../middlewares/ProtectRoute.js';

const router = express.Router();

router.get('/all', protectRoute, getUsers);
router.post('/signup', signupUser);
router.post('/login', loginUser);
router.post('/logout', protectRoute, logoutUser);

export default router;