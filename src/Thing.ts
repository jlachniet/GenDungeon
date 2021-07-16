abstract class Thing {
	private name: string;

	constructor(name: string) {
		this.name = name;
	}

	getName() {
		return this.name;
	}
}

export default Thing;
