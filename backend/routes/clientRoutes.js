import express from 'express';
import protectRoute from '../middlewares/ProtectRoute.js';
import { createClient, deleteClient, getClientByID, getClients, updateClient } from '../controllers/clientController.js';

const router = express.Router();

router.get('/client/:id', protectRoute, getClientByID);
router.get('/all', protectRoute, getClients);
router.post('/create', protectRoute, createClient);
router.delete('/delete/:id', protectRoute, deleteClient);
router.put('/update/:id', protectRoute, updateClient);

export default router;