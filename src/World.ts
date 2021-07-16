import Player from './Player';
import Room from './Room';

class World {
	private player: Player;
	private rooms: Room[];

	constructor() {
		this.player = new Player();
		this.rooms = [];
	}

	addRoom(x: number, y: number) {
		this.rooms.push(new Room(x, y));
	}

	getActiveRoom() {
		return this.getRoom(this.player.getX(), this.player.getY());
	}

	private getRoom(x: number, y: number) {
		return this.rooms.find((room) => room.getX() === x && room.getY() === y);
	}
}

export default World;
