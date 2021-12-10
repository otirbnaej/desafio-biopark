import { ListStudentService } from '@services/student/ListStudentService';
import { Request, Response } from 'express';

class ListStudentController {
	async handle(request: Request, response: Response) {
		const listStudentService = new ListStudentService();

		const students = await listStudentService.execute();

		return response.json(students);
	}
}

export { ListStudentController };
