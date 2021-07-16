/**
 * The input box in the UI.
 */
class InputBox {
	private element = <HTMLInputElement>(
		document.getElementsByClassName('input-box')[0]
	);

	/**
	 * Focuses the input box.
	 */
	focus() {
		this.element.focus();
	}

	/**
	 * Gets the text in the input box, and clears the input box.
	 */
	getInput() {
		const input = this.element.value;

		this.element.value = '';
		return input;
	}
}

export default InputBox;
