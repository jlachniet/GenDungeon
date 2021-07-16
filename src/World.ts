import Room from './Room';

class World {
	private rooms: Room[];

	constructor() {
		this.rooms = [];
	}

	addRoom(x: number, y: number) {
		this.rooms.push(new Room(x, y));
	}

	getRoom(x: number, y: number) {
		return this.rooms.find((room) => room.getX() === x && room.getY() === y);
	}
}

export default World;
