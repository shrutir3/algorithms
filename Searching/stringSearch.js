/**
 * Search for a specific pattern in a given string and retunr the count of the number of times, the pattern appears.
 */

// naive solution
function stringSearch(testStr, pattern) {
	let counter = 0;
	for (let i = 0; i < testStr.length; i++) {
		for (let j = 0; j < pattern.length; j++) {
			if (testStr[i + j] !== pattern[j]) {
				break;
			} else if (j === pattern.length - 1) counter++;
		}
	}
	return counter;
}