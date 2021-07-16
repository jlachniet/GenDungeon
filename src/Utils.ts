/**
 * Takes a string, capitalizes the first letter, and returns the string.
 * @param str The string to capitalize.
 * @returns The capitalized string.
 */
function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export { capitalize };
