/**
 * A thing in a room.
 */
abstract class Thing {
	private name: string;

	/**
	 * Constructs a new thing.
	 */
	constructor(name: string) {
		this.name = name;
	}

	/**
	 * Gets the name of the thing.
	 * @returns The name of the thing.
	 */
	getName() {
		return this.name;
	}
}

export default Thing;
