/**
 * Classic bubble sort
 */

function bubbleSort(arr) {
	const newArr = [...arr];

	for (let i = newArr.length; i >= 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (newArr[j] > newArr[j + 1]) {
				let temp = newArr[j];
				newArr[j] = newArr[j + 1];
				newArr[j + 1] = temp;
			}
		}
	}
	return newArr;
}


// Optimized for nearly-sorted arrays

function optimizedBubbleSort(arr) {
	const newArr = [...arr];

	for (let i = newArr.length; i >= 0; i--) {
		let didSwap = false;
		for (let j = 0; j < i - 1; j++) {
			if (newArr[j] > newArr[j + 1]) {
				let temp = newArr[j];
				newArr[j] = newArr[j + 1];
				newArr[j + 1] = temp;
				didSwap = true;
			}
		}
		if (!didSwap) break;
	}
	return newArr;
}