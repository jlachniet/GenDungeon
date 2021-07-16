import Game from './Game';

class InputHandler {
	static handle(game: Game, input: string) {
		const world = game.getWorld();

		if (input == 'look') {
			return world.getActiveRoom()!.getDescription();
		}

		return 'Unknown command.';
	}
}

export default InputHandler;
