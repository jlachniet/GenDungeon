import Game from './Game';

class InputHandler {
	static handle(game: Game, input: string) {
		const world = game.getWorld();

		if (input == 'look') {
			return world.getRoom(0, 0)!.getDescription();
		}

		return 'Unknown command.';
	}
}

export default InputHandler;
