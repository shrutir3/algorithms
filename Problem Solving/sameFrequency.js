/*
	Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same 
	frequency of digits.

	Your solution MUST have the following complexities:
	Time: O(n)
	Sample inputs:
		sameFrequency(182, 281);	// true
		sameFrequency(34, 14);	// false
		sameFrequency(3589578, 5879385);	// true
		sameFrequency(22, 222);	// false
 */

function sameFrequency(num1, num2) {
	let n1 = num1.toString();
	let n2 = num2.toString();

	if (n1.length !== n2.length) return false;

	// Create a lookup
	let lookup = {};
	for (let digit of n1) {
		lookup[digit] = ++lookup[digit] || 1;
	}

	// Compare n2 with lookup
	for (let digit of n2) {
		if(!lookup[digit]) {
			return false;
		} else {
			lookup[digit] -= 1;
		}
	}
	return true;
}
