import Monster from './Monster';
import Thing from './Thing';
import { capitalizeFirstCharacter } from './Utils';

class Room {
	private x: number;
	private y: number;

	private contents: Thing[];
	private visualDescription: string;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;

		this.contents = [];
		this.visualDescription = 'a room';

		// Testing
		this.contents.push(new Monster());
	}

	getFirstTimeDescription() {
		return `You enter ${
			this.visualDescription
		}.<br><br>${this.getContentsDescription()}`;
	}

	getDescription() {
		return `${capitalizeFirstCharacter(
			this.visualDescription
		)}.<br><br>${this.getContentsDescription()}`;
	}

	getX() {
		return this.x;
	}

	getY() {
		return this.y;
	}

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

	private isEmpty() {
		return this.contents.length === 0;
	}
}

export default Room;
