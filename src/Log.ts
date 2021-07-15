class Log {
	private static DOMElement = <HTMLDivElement>(
		document.getElementsByClassName('log')[0]
	);

	static clear() {
		this.DOMElement.innerHTML = '';
	}

	static addEntry(entry: string) {
		this.DOMElement.innerHTML += `<div class="entry">${entry}</div>`;
	}
}

export default Log;
