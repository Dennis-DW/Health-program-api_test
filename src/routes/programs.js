import express from 'express';
import { createProgram } from '../controllers/programController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import authAdmin from '../middleware/adminMiddleware.js';

const router = express.Router();


// Protect the route with both authMiddleware and authAdmin
router.post('/', authMiddleware, authAdmin, createProgram);

export default router;