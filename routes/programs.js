import express from 'express';
import { createProgram } from '../controllers/programController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.post('/', authMiddleware, createProgram);

export default router;