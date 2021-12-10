import prismaClient from '../../prisma';
import validator from 'validator';

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
			if (!validator.isEmail(email)) throw `Invalid email.`;

			const studentAlreadyExists = await prismaClient.student.findUnique({
				where: {
					email,
				},
			});
			if (studentAlreadyExists) throw `Student's email already exists.`;
			if (!birthDate) throw `Student must have a birth date`;

			// Validate Date
			const [day, month, year] = birthDate.split('-');
			if (!validator.isDate(`${year}-${month}-${day}`))
				throw `Invalid birthdate`;
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
