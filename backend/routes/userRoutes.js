import { Router } from 'express';
import { registerUser, authUser, getUserProfile } from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = Router();

router.post('/register', registerUser);
router.post('/login', authUser);
router.get('/profile', authMiddleware, getUserProfile);

export default router;
