import Commands from './Commands';
import Game from './Game';

/**
 * Handles input from the user.
 */
class InputHandler {
	/**
	 * Handle an input.
	 * @param game The game instance.
	 * @param input The input.
	 * @returns The response to the input.
	 */
	static handle(game: Game, input: string) {
		const normalizedInput = input.toLowerCase();
		Commands.setInput(normalizedInput, 'Unknown command.');

		const world = game.getWorld();
		const player = world.getPlayer();

		Commands.test(/^look$/g, () => {
			return world.getActiveRoom().getDescription();
		});

		Commands.test(/^north$/g, () => {
			player.move('North');
			return 'You go north.';
		});
		Commands.test(/^south$/g, () => {
			player.move('South');
			return 'You go south.';
		});
		Commands.test(/^east$/g, () => {
			player.move('East');
			return 'You go east.';
		});
		Commands.test(/^west$/g, () => {
			player.move('West');
			return 'You go west.';
		});

		return Commands.getOutput();
	}
}

export default InputHandler;
