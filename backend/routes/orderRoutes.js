import { Router } from 'express';
import { createOrder, getOrderById, getMyOrders } from '../controllers/orderController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = Router();

router.post('/', authMiddleware, createOrder);
router.get('/:id', authMiddleware, getOrderById);
router.get('/myorders', authMiddleware, getMyOrders);

export default router;
