class InputBox {
	private element = <HTMLInputElement>(
		document.getElementsByClassName('input-box')[0]
	);

	focus() {
		this.element.focus();
	}

	getInput() {
		const input = this.element.value;

		this.element.value = '';
		return input;
	}
}

export default InputBox;
