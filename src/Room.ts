import Monster from './Monster';
import Thing from './Thing';

class Room {
	private x: number;
	private y: number;

	private contents: Thing[];
	private visualDescription: string;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;

		this.contents = [];
		this.visualDescription = 'A room.';

		// Testing
		this.contents.push(new Monster());
	}

	getDescription() {
		let descriptionLines = [];
		descriptionLines.push(this.visualDescription);

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

	getX() {
		return this.x;
	}

	getY() {
		return this.y;
	}

	private isEmpty() {
		return this.contents.length === 0;
	}
}

export default Room;
