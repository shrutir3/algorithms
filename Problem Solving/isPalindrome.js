/*
	Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome, 
	otherwise it returns false.
 */

function isPalindrome(str) {
	if (!str.length || str[0] !== str[str.length - 1]) return false;
	if (str.length === 1 || (str.length === 2 && str[0] === str[1])) return true; 
	return isPalindrome(str.substr(1, str.length - 2));
}
