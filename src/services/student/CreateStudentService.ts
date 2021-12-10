import prismaClient from '../../prisma';
import validator from 'validator';
import { CPF } from 'src/helpers/CPF';

interface IStudentRequest {
	name: string;
	email: string;
	cpf: string;
	birthDate: string;
}

class CreateStudentService {
	async execute({ name, email, cpf, birthDate }: IStudentRequest) {
		try {
			// Checks if student already exists
			const studentAlreadyExists = await prismaClient.student.findUnique({
				where: {
					email,
				},
			});
			if (studentAlreadyExists) throw `Student's email already exists.`;

			// Validate Empty Fields
			if (!name || validator.isEmpty(name)) throw `Student must have a name.`;
			if (!email || validator.isEmpty(email))
				throw `Student must have an email.`;
			if (!validator.isEmail(email)) throw `Invalid email.`;

			// Validate Date
			if (!birthDate || validator.isEmpty(birthDate))
				throw `Student must have a birth date`;
			const [day, month, year] = birthDate.split('-');
			if (!validator.isDate(`${year}-${month}-${day}`))
				throw `Invalid birthdate`;
			const date = new Date(`${year}-${month}-${day}`);

			// Validate CPF
			if (!cpf || validator.isEmpty(cpf)) throw 'Student must have a CPF';
			if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) throw 'Invalid CPF format';
			const newCpf = new CPF(cpf);
			const cpfIsValid = newCpf.validate();
			if (!cpfIsValid) throw 'Invalid CPF';

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
