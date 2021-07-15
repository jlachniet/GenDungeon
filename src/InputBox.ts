import Log from './Log';

class InputBox {
	private static element = <HTMLInputElement>(
		document.getElementsByClassName('input-box')[0]
	);

	static focus() {
		this.element.focus();
	}

	static getInput() {
		Log.addEntry(`> ${this.element.value}`);
		Log.addEntry('Hello world!');

		this.element.value = '';
	}
}

export default InputBox;
