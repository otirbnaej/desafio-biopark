import prismaClient from '../../prisma';

interface IStudentRequest {
	name: string;
	email: string;
	cpf: string;
	birthDate: string;
}

class CreateStudentService {
	async execute({ name, email, cpf, birthDate }: IStudentRequest) {
		try {
			if (!name) throw `Student must have a name.`;
			if (!email) throw `Student must have an email.`;
			const studentAlreadyExists = await prismaClient.student.findUnique({
				where: {
					email,
				},
			});
			if (studentAlreadyExists) throw `Student's email already exists.`;
			if (!birthDate) throw `Student must have a birth date`;

			// Validate Date
			const [day, month, year] = birthDate.split('-');
			console.log(day, month, year);

			const date = new Date(`${year}-${month}-${day}`);
			console.log(date);

			const student = await prismaClient.student.create({
				data: {
					name,
					email,
					cpf,
					birthDate: date,
				},
			});

			return student;
		} catch (err) {
			throw new Error(`Unable to create Student - ${err}`);
		}
	}
}

export { CreateStudentService };
