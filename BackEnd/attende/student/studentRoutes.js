import { Router } from 'express';
import {getAllStudents ,createStudent } from './studentController.js'

const router = Router()

router.get('/', getAllStudents);
router.post('/',createStudent);

export default router
