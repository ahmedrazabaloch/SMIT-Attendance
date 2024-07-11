import { Router } from 'express';
import { getAllCampuses, createCampus } from './campusController.js';

const router = Router()
router.get('/', getAllCampuses);
router.post('/', createCampus);

export default router;
