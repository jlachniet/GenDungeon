/**
 * A playable characer.
 */
class Player {
	private x: number;
	private y: number;

	/**
	 * Constructs a player.
	 */
	constructor() {
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
}

export default Player;
