import { CreateStudentService } from '@services/student/CreateStudentService';
import { Request, Response } from 'express';

class CreateStudentController {
	async handle(request: Request, response: Response) {
		const { name, email, cpf, birthDate } = request.body;

		const createStudentService = new CreateStudentService();

		const student = await createStudentService.execute({
			name,
			email,
			cpf,
			birthDate,
		});

		return response.json(student);
	}
}

export { CreateStudentController };
