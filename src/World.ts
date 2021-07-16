import Player from './Player';
import Room from './Room';

/**
 * A world in which a game takes place.
 */
class World {
	private player: Player;
	private rooms: Room[];

	/**
	 * Constructs a new world.
	 */
	constructor() {
		this.player = new Player();
		this.rooms = [];
	}

	/**
	 * Adds a room to the world.
	 * @param x The x-coordinate of the room.
	 * @param y The y-coordinate of the room.
	 * @returns The room that was added.
	 */
	addRoom(x: number, y: number) {
		this.rooms.push(new Room(x, y));
		return this.getRoom(x, y);
	}

	/**
	 * Gets the room that the player is currently in.
	 * @returns The active room.
	 */
	getActiveRoom() {
		return this.getRoom(this.player.getX(), this.player.getY());
	}

	/**
	 * Gets the room at the specified coordinates, and creates it if doesn't exist.
	 * @param x The x-coordinate.
	 * @param y The y-coordinate.
	 * @returns The room at the specified coordinates.
	 */
	private getRoom(x: number, y: number): Room {
		const room = this.rooms.find(
			(room) => room.getX() === x && room.getY() === y
		);

		if (room) {
			return room;
		} else {
			return this.addRoom(x, y);
		}
	}
}

export default World;
