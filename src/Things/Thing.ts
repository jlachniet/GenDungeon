import indefinite from 'indefinite';
import { capitalize } from '../Utils';

/**
 * A thing in a room.
 */
abstract class Thing {
	private name: string;
	private description: string;

	/**
	 * Constructs a new thing.
	 * @param name The name of the thing.
	 * @param description A description of the thing.
	 */
	constructor(name: string, description?: string) {
		this.name = name;

		if (description) {
			this.description = description;
		} else {
			this.description = `${capitalize(indefinite(name))}.`;
		}
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
