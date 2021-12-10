import prismaClient from '../../prisma';

class ListStudentService {
	async execute() {
		try {
			const students = await prismaClient.student.findMany();
			return students;
		} catch (err) {
			throw new Error(`Unable to list Students - ${err}`);
		}
	}
}

export { ListStudentService };
