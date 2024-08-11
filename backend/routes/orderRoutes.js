import express from 'express';
import protectRoute from '../middlewares/ProtectRoute.js';
import { createOrder, deleteOrder, getOrders, updateOrder } from '../controllers/orderController.js';

const router = express.Router();

/* router.get('/:id', protectRoute, getClient); */
router.get('/all', protectRoute, getOrders);
router.post('/create', protectRoute, createOrder);
router.delete('/delete/:id', protectRoute, deleteOrder);
router.put('/update/:id', protectRoute, updateOrder);

export default router;