/*
	Write a function called averagePair. Given a sorted array of integers and a target average, 
	determine if there is a pair of values in the array where the average of the pair equals the target average. 
	There may be more than one pair that matches the average target.

	Bonus constraints:
	Time: O(n)
	Space: O(1)

	Sample Input:
	averagePair([1, 2, 3], 2.5);	// true
	averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);	// true
	averagePair([-1, 0, 3, 4, 5, 6], 4.1);	// false
	averagePair([], 4);	// false
 */

function averagePair(arr, targetAvg) {
	let len = arr.length;
	if (!len) return false;

	let i = 0;
	let j = len - 1;

	while( i < j ) {
		let avg = (arr[i] + arr[j]) / 2;
		if (avg > targetAvg) {
			j--;
		} else if (avg < targetAvg) {
			i++;
		} else if (avg === targetAvg) {
			return true;
		}
	}
	return false;
}
