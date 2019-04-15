/*
	Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
	and check whether there are any duplicates among the arguments passed in. 

	Restrictions:
	Time: O(n)
	Space: O(n)

	Bonus:
	Time: O(n log n)
	Space: O(1)

	Sample inputs:
	areThereDuplicates(1, 2, 3);	// false
	areThereDuplicates(1, 2, 2);	// true
	areThereDuplicates('a', 'b', 'c', 'a');		// true

 */

function areThereDuplicates() {
	let params = [...arguments];

	if (!params.length) return false;

	let i = 0;
	let j = i + 1;

	params.sort();
	while(j < params.length) {
		if(params[i] !== params[j]) {
			i++;
			j++;
		} else {
			return true;
		}
	}
	return false;
}


function areThereDuplicates() {
	let params = [...arguments];

	if (!params.length) return false;

	let valMap = {};
	for (let val of params) {
		if (!valMap[val]) {
			valMap[val] = 1;
		} else {
			return true;
		}
	}
	return false;
}


// Voila!!
function areThereDuplicates() {
	return new Set(arguments).size !== arguments.length;
}
