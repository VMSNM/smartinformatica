import express from 'express';
import protectRoute from '../middlewares/ProtectRoute.js';
import { createService, deleteService, getServices, updateService } from '../controllers/serviceController.js';

const router = express.Router();

/* router.get('/:id', protectRoute, getClient); */
router.get('/all', protectRoute, getServices);
router.post('/create', protectRoute, createService);
router.delete('/delete/:id', protectRoute, deleteService);
router.put('/update/:id', protectRoute, updateService);

export default router;