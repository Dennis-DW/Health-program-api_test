import express from 'express';
import { registerClient, searchClients, getClientProfile, enrollClient } from '../controllers/clientController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.post('/', registerClient);
router.get('/', searchClients);
router.get('/:id', authMiddleware, getClientProfile);
router.post('/:id/enrollments', authMiddleware, enrollClient);

export default router;