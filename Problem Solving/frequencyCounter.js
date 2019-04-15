// same([1,2,3], [4,1,9])   -> true
// same([1,2,3], [1,9])     -> false
// same([1,2,1], [4,4,1])   -> false
 
function same(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;

	// compare the array of squares to arr2
		// create value map from both arrays and compare them  
	const valueMap = {};
	for (let value of arr1) {
		const key = value * value;
		valueMap[key] = ++valueMap[key] || 1;
	}

	const arr2ValueMap = {};
	for (let value of arr2) {
		arr2ValueMap[value] = ++arr2ValueMap[value] || 1;
	}

	for (let key in valueMap) {
		if (!arr2ValueMap[key]) return false;
		if (valueMap[key] !== arr2ValueMap[key]) return false;
	}

	return true;
} 