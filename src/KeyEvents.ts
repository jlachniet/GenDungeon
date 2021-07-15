import InputBox from './InputBox';

class KeyEvents {
	static addListener() {
		document.addEventListener('keydown', (event) => {
			if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
				return;
			}

			if (event.key == 'Enter') {
				InputBox.getInput();
			} else {
				InputBox.focus();
			}
		});
	}
}

export default KeyEvents;
