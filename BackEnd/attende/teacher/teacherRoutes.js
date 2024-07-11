import { Router } from 'express';
import  {getAllTeachers , createTeacher} from './teacherController.js'

const router = Router()

router.get('/', getAllTeachers);
router.post('/', createTeacher);

export default router
