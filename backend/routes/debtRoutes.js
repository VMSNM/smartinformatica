import express from 'express';
import protectRoute from '../middlewares/ProtectRoute.js';
import { createDebt, deleteDebt, getDebts, updateDebt } from '../controllers/debtController.js';

const router = express.Router();

/* router.get('/:id', protectRoute, getClient); */
router.get('/all', protectRoute, getDebts);
router.post('/create', protectRoute, createDebt);
router.delete('/delete/:id', protectRoute, deleteDebt);
router.put('/update/:id', protectRoute, updateDebt);

export default router;