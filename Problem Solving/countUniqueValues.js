// countUniqueValues([1, 1, 1, 1, 1, 2])                              -> 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])            -> 7
// countUniqueValues([])                                              -> 0
// countUniqueValues([-2, -1, -1, 0, 1])                              -> 4

function countUniqueValues(arr) {
	if (!arr.length) return 0;

	let i = 0;
	let j = i + 1;

	while(j < arr.length) {
		if (arr[i] === arr[j]) {
			j++;
		} else {
			i++;
			arr[i] = arr[j];
		}
	}

	return i + 1;
}

// function countUniqueValues(arr) {
// 	const result = {};

// 	for (let value of arr) {
// 		result[value] = ++result[value] || 1;
// 	}

// 	return Object.keys(result).length;
// }