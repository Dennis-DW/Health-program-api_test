import express from 'express';
import { registerClient, searchClients, getClientProfile, enrollClient, loginClient } from '../controllers/clientController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', registerClient);
router.post('/login', loginClient);
router.get('/', searchClients);
router.get('/:id', authMiddleware, getClientProfile);
router.post('/:id/enrollments', authMiddleware, enrollClient);

export default router;