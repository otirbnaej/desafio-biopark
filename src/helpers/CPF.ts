class CPF {
	private cpf: string;

	constructor(cpf: string) {
		this.cpf = cpf.replace(/\D+/g, '');
	}

	stringToArray(): string[] {
		return Array.from(this.cpf);
	}

	static isSequence(cpfArr: string[]): boolean {
		const cpfArrCopy = cpfArr.join('');
		const sequence = cpfArrCopy[0].repeat(cpfArrCopy.length);
		return sequence === cpfArrCopy;
	}

	static sumDig(cpfArr: string[]): number {
		return cpfArr.reduce(
			(acc, value, index) => acc + Number(value) * (cpfArr.length + 1 - index),
			0,
		);
	}

	static generateDig(acc: number): number {
		return 11 - (acc % 11) > 9 ? 0 : 11 - (acc % 11);
	}

	static cpfCompare(cpfArray: string[], cpfCopy: string[]): boolean {
		return cpfArray.join('') === cpfCopy.join('');
	}

	validate(): boolean {
		if (typeof this.cpf !== 'string') return false;
		const cpfArray = this.stringToArray();
		let cpfCopy = [...cpfArray];
		if (typeof cpfCopy === 'undefined' || cpfCopy.length !== 11) return false;
		if (CPF.isSequence(cpfCopy)) return false;

		cpfCopy = cpfCopy.splice(0, 9);

		cpfCopy.push(String(CPF.generateDig(CPF.sumDig(cpfCopy))));
		cpfCopy.push(String(CPF.generateDig(CPF.sumDig(cpfCopy))));

		return CPF.cpfCompare(cpfArray, cpfCopy);
	}
}

export { CPF };
