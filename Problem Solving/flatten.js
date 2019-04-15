/*
	Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

	SAMPLE INPUT / OUTPUT
	flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
	flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
	flatten([[1],[2],[3]]) // [1,2,3]
	flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
 */

function flatten(arr) {
	let newArr = [];
	if (!arr.length) return newArr;
	if (!(arr[0] instanceof Array)) {
		newArr.push(arr[0]);
	} else {
		newArr = newArr.concat(flatten(arr[0]));	
	}
	newArr = newArr.concat(flatten(arr.slice(1)));
	return newArr;
}
