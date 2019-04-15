/*
	Write a function factorial which accepts a number and returns the factorial of that number.
 */

function factorial(n) {
	if (n === 1 || n === 0) return 1;
	return n * factorial(n - 1);
}
