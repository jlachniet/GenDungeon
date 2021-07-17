import World from './World';

type CardinalDirection = 'North' | 'South' | 'East' | 'West';

/**
 * A playable characer.
 */
class Player {
	private world: World;

	private x: number;
	private y: number;

	/**
	 * Constructs a player.
	 */
	constructor(world: World) {
		this.world = world;

		this.x = 0;
		this.y = 0;
	}

	/**
	 * Get's the player's x-coordinate.
	 * @returns The player's x-coordinate.
	 */
	getX(): number {
		return this.x;
	}

	/**
	 * Get's the player's y-coordinate.
	 * @returns The player's y-coordinate.
	 */
	getY(): number {
		return this.y;
	}

	/**
	 * Moves the player in a given direction, and creates the room if necessary.
	 * @param direction The direction to move in.
	 */
	move(direction: CardinalDirection) {
		if (direction === 'North') {
			this.y++;
		} else if (direction === 'South') {
			this.y--;
		} else if (direction === 'East') {
			this.x++;
		} else if (direction === 'West') {
			this.x--;
		}

		if (!this.world.doesRoomExist(this.x, this.y)) {
			this.world.addRoom(this.x, this.y);
		}
	}
}

export default Player;
