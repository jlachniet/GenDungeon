import Thing from './Thing';
import { capitalize } from './Utils';

/**
 * A room in the world.
 */
class Room {
	private x: number;
	private y: number;

	private contents: Thing[];
	private visualDescription: string;

	/**
	 * Constructs a new room.
	 * @param x The x-coordinate of the room.
	 * @param y The y-coordinate of the room.
	 */
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;

		this.contents = [];
		this.visualDescription = 'a room';
	}

	/**
	 * Gets a description of the room, as if you were entering it for the first time.
	 * @returns A description of the room.
	 */
	getFirstTimeDescription() {
		return `You enter ${
			this.visualDescription
		}.<br><br>${this.getContentsDescription()}`;
	}

	/**
	 * Gets a description of the room, as if you were returning to it.
	 * @returns A description of the room.
	 */
	getDescription() {
		return `${capitalize(
			this.visualDescription
		)}.<br><br>${this.getContentsDescription()}`;
	}

	/**
	 * Gets the room's x-coordinate.
	 * @returns The room's x-coordinate.
	 */
	getX() {
		return this.x;
	}

	/**
	 * Gets the room's y-coordinate.
	 * @returns The room's y-coordinate.
	 */
	getY() {
		return this.y;
	}

	/**
	 * Gets a description of the room's contents.
	 * @returns A description of the room's contents.
	 */
	private getContentsDescription() {
		const descriptionLines = [];

		if (this.isEmpty()) {
			descriptionLines.push('This room is empty.');
		} else {
			descriptionLines.push('This room contains:');
			this.contents.forEach((thing, index) => {
				const thingNumber = index + 1;
				descriptionLines.push(`${thingNumber}) ${thing.getName()}`);
			});
		}

		return descriptionLines.join('<br />');
	}

	/**
	 * Checks if the room is empty.
	 * @returns Whether the room is empty.
	 */
	private isEmpty() {
		return this.contents.length === 0;
	}
}

export default Room;
