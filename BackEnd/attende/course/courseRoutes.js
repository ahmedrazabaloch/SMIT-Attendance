import { Router } from 'express';
import {createCourse, getAllCourses} from './courseController.js'

const router = Router();

router.get('/', getAllCourses);
router.post('/', createCourse);

export default router;
