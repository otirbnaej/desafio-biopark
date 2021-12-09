interface IStudentRequest {
	name: string;
	email: string;
	cpf: string;
	birthDate: Date;
}

class CreateStudentService {
	async execute({ name, email, cpf, birthDate }: IStudentRequest) {
		try {
			const student = { name, email, cpf, birthDate };

			return student;
		} catch (err) {
			throw new Error(`Unable to create Student - ${err}`);
		}
	}
}

export { CreateStudentService };
