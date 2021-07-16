/**
 * The log in the UI.
 */
class Log {
	private DOMElement = <HTMLDivElement>(
		document.getElementsByClassName('log')[0]
	);

	/**
	 * Clears the log.
	 */
	clear() {
		this.DOMElement.innerHTML = '';
	}

	/**
	 * Adds an entry to the log.
	 * @param entry The entry.
	 */
	addEntry(entry: string) {
		this.DOMElement.innerHTML += `<div class="entry">${entry}</div>`;
	}
}

export default Log;
