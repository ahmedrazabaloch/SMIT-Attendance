import { Router } from 'express';
import { getAllBatches, createBatch } from './batchController.js';

const router = Router();
router.get('/', getAllBatches);
router.post('/', createBatch);

export default router;
