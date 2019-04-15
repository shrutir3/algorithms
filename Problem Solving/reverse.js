/*
	Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 */

function reverse(str) {
	const l = str.length
	if (!l) return '';
	return str[l - 1] + reverse(str.substr(0, l - 1));
}