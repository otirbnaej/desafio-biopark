class ListStudentService {
	async execute() {
		try {
			const students = 'ok';
			return students;
		} catch (err) {
			throw new Error(`Unable to list Students - ${err}`);
		}
	}
}

export { ListStudentService };
