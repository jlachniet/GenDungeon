/**
 * Takes a string, capitalizes the first letter, and returns the string.
 * @param str The string to capitalize.
 * @returns The capitalized string.
 */
function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Takes an array and returns a random element.
 * @param arr The array to select a random element from.
 * @returns The random element.
 */
function getRandElement(arr: any[]) {
	return arr[Math.floor(Math.random() * arr.length)];
}

export { capitalize, getRandElement };
