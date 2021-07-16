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
		const world = game.getWorld();

		if (input == 'look') {
			return world.getActiveRoom()!.getDescription();
		}

		return 'Unknown command.';
	}
}

export default InputHandler;
