import express from 'express';
import protectRoute from '../middlewares/ProtectRoute.js';
import { getQuickNotes, updateQuickNotes } from '../controllers/quickNotesController.js';

const router = express.Router();

router.get('/', protectRoute, getQuickNotes);
router.put('/', protectRoute, updateQuickNotes);

export default router;