/*
	Write a recursive function called capitalizeWords. Given an array of words, return a new array containing 
	each word capitalized.

	SAMPLE INPUT / OUTPUT
	let words = ['i', 'am', 'learning', 'recursion'];
	capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
 */

function capitalizedWords(arr) {
	let newArr = [];
	if (!arr.length) return newArr;
	const w = arr[0];
	newArr.push(w.toUpperCase());
	return newArr.concat(capitalizedWords(arr.slice(1)));
}
