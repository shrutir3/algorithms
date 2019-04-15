/**
 * Classic selection sort
 */

function selectionSort(arr) {
	const newArr = [...arr];     // avoid creating new array to reduce space complexity

	for (let i = 0; i < newArr.length; i++) {
		let minIndex = i;
		for (let j = i + 1; j < newArr.length; j++) {
			if (newArr[j] < newArr[minIndex]) {
				minIndex = j;
			}
		}
		if (newArr[minIndex] !== newArr[i]) {
			let temp = newArr[minIndex];
			newArr[minIndex] = newArr[i];
			newArr[i] = temp;
		}
	}
	return newArr;
}