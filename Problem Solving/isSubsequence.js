/*
	Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string
	form a subsequence of the characters in the second string. In other words, the function should check whether the characters
	in the first string appear somewhere in the second string, without their order changing.

	Constraints:
	Time: O(n + m)
	Space: O(1)

	Sample inputs:
	isSubsequence('hello', 'hello world');		// true
	isSubsequence('sing', 'sting');		// true
	isSubsequence('abc', 'abracadabra');		// true
	isSubsequence('abc', 'acb');		// false (order matters)
 */

function isSubsequence(str1, str2) {
	let i = 0;

	for (let j = 0; j < str2.length; j++) {
		let char = str2[j];
		if (str1[i] === char) {
			i++;
		}
	}
	if (i !== str1.length) return false;
	return true;
}
