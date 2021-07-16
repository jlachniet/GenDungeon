import InputBox from './InputBox';
import InputHandler from './InputHandler';
import Log from './Log';
import World from './World';

/**
 * Contains an instance of the game, and all data related to it.
 */
class Game {
	private inputBox!: InputBox;
	private log!: Log;
	private world!: World;

	/**
	 * Generates a new game.
	 */
	init() {
		this.inputBox = new InputBox();

		this.log = new Log();
		this.log.clear();

		this.world = new World();
		this.world.addRoom(0, 0);

		this.log.addEntry(this.world.getActiveRoom()!.getFirstTimeDescription());

		this.addKeyboardListener();
	}

	/**
	 * Gets the world.
	 */
	getWorld() {
		return this.world;
	}

	/**
	 * Adds a listener for keyboard events.
	 */
	private addKeyboardListener() {
		document.addEventListener('keydown', (event) => {
			if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
				return;
			}

			if (event.key == 'Enter') {
				const input = this.inputBox.getInput();
				const output = InputHandler.handle(this, input);

				this.log.addEntry(`> ${input}`);
				this.log.addEntry(output);
			} else {
				this.inputBox.focus();
			}
		});
	}
}

export default Game;
