// validAnagram('', '')                           -> true
// validAnagram('aaz', 'zza')                     -> false
// validAnagram('anagram', 'nagaram')               -> true
// validAnagram('rat', 'car')                     -> false
// validAnagram('awesome', 'awesom')              -> false
// validAnagram('qwerty', 'qeywrt')               -> true
// validAnagram('texttwisttime', 'timetwisttext') -> true

function validAnagram(str1, str2) {
	if (str1.length !== str2.length) return false;

	const str1CharMap = {};
	for (let char of str1) {
		str1CharMap[char] = ++str1CharMap[char] || 1;
	}

	const str2CharMap = {};
	for (let char of str2) {
		str2CharMap[char] = ++str2CharMap[char] || 1;
	}

	for (let key in str1CharMap) {
		if (!str2CharMap[key]) return false;
		if(str1CharMap[key] !== str2CharMap[key]) return false;
	}

	return true;
} 