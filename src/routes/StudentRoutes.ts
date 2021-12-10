import { Router } from 'express';
import { CreateStudentController } from '@controllers/student/CreateStudentController';
import { ListStudentController } from '@controllers/student/ListStudentController';

const router = Router();

const listStudentController = new ListStudentController();
const createStudentController = new CreateStudentController();

// Student routes
router.get('/students', listStudentController.handle);
router.post('/student', createStudentController.handle);

export { router };
