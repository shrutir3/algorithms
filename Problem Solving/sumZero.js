// sumZero([-3, -2, -1, 0, 1, 2, 3])          -> [-3, 3]
// sumZero([-2, 0, 1, 2, 3])                  -> undefined
// sumZero([1, 2, 3])                         -> undefined
// sumZero([-4, -3, -2, -1, 0, 5, 10])        -> undefined

function sumZero(arr) {
	const len = arr.length;

	let i = 0;
	let j = len - 1;
	let left = arr[i];
	let right = arr[j];
	let sum = left + right;

	while(sum) {
		if (sum > 0) {
			j -= 1;
			right = arr[j];
		} else if (sum < 0) {
			i += 1;
			left = arr[i];
		}
		sum = left + right;
	}

	return (left && right) ? [left, right] : undefined;
}