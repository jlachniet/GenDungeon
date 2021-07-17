/**
 * Provides shorthands for checking commands and handling the results. This is to keep the InputHandler class as clean
 * as possible. This class has three static methods, setInput, test, and getOutput, which should be called in that
 * order from the InputHandler class. For example:
 *
 * ```typescript
 * // Sets the input
 * Commands.setInput(input, 'Unknown command');
 *
 * // Tests two commands
 * Commands.test(/^foo$/g, () => {
 *     return 'You said foo.';
 * });
 * Commands.test(/^bar$/g, () => {
 *     return 'You said bar.';
 * });
 *
 * // Passes the output to the parent scope
 * return Commands.getOutput();
 * ```
 */
class Commands {
	static input: string;
	static output: string;

	static hasMatched: boolean;

	/**
	 * Sets the input to match commands against. This needs to be run before any commands are tested against, so that
	 * the tester knows what to check against.
	 * @param input The input to test commands against.
	 * @param defaultOutput The default output (what gets returned if no commands match, e.g. "Unknown command.")
	 */
	static setInput(input: string, defaultOutput: string) {
		this.input = input;
		this.output = defaultOutput;

		this.hasMatched = false;
	}

	/**
	 * Tests to see if a command matches the input. If the input matches, the callback is run, and the output is set to
	 * the return value of the callback. This will only happen once, so if multiple commands match the input, only the
	 * first one to match will actually be called and affect the output.
	 * @param match The string or regex to test the input against.
	 * @param callback The callback to run if the input matches.
	 */
	static test(match: string | RegExp, callback: () => string) {
		if (this.hasMatched) {
			return;
		}

		if (
			(typeof match === 'string' && this.input === match) ||
			(match instanceof RegExp && match.test(this.input))
		) {
			this.hasMatched = true;
			this.output = callback();
		}
	}

	/**
	 * Gets the final output after checking against all the commands. If no commands match, will return the default
	 * output instead.
	 * @returns The output.
	 */
	static getOutput() {
		return this.output;
	}
}

export default Commands;
