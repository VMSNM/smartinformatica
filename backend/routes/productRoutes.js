import express from 'express';
import protectRoute from '../middlewares/ProtectRoute.js';
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/productController.js';

const router = express.Router();

/* router.get('/:id', protectRoute, getClient); */
router.get('/all', protectRoute, getProducts);
router.post('/create', protectRoute, createProduct);
router.delete('/delete/:id', protectRoute, deleteProduct);
router.put('/update/:id', protectRoute, updateProduct);

export default router;