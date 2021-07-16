class Log {
	private DOMElement = <HTMLDivElement>(
		document.getElementsByClassName('log')[0]
	);

	clear() {
		this.DOMElement.innerHTML = '';
	}

	addEntry(entry: string) {
		this.DOMElement.innerHTML += `<div class="entry">${entry}</div>`;
	}
}

export default Log;
