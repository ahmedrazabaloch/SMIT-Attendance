import { Router } from 'express';
import { getAllAttendances, createAttendance } from './attendanceController.js';

const router = Router();
router.get('/', getAllAttendances);
router.post('/', createAttendance);

export default router;
