// Binary Search

function binarySearch(arr, item) {
	let start = 0;
	let end = arr.length - 1;
	let mid = Math.floor((start + end) / 2);

	while(arr[mid] !== item && start <= end) {
		if (item < arr[mid]) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
		mid = Math.floor((start + end) / 2);
	}

	return (arr[mid] !== item) ? mid : -1;
}