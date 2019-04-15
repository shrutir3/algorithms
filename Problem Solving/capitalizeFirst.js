/*
	Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of 
	each string in the array.

	SAMPLE INPUT / OUTPUT
	capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
 */

function capitalizeFirst(arr) {
	let newArr = [];
	if (!arr.length) return newArr;
	const w = arr[0];
	newArr.push(w[0].toUpperCase() + w.substr(1, w.length));
	return newArr.concat(capitalizeFirst(arr.slice(1)));
}
