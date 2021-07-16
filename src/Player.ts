class Player {
	private x: number;
	private y: number;

	constructor() {
		this.x = 0;
		this.y = 0;
	}

	getX(): number {
		return this.x;
	}

	getY(): number {
		return this.y;
	}
}

export default Player;
