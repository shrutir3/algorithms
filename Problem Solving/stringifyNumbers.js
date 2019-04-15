/**
 * Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and 
 * convrts them to strings. 
 */

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
};

function stringifyNumbers(o) {
	let result = {};
	for (let key in o) {
		if (typeof o[key] === "number") {
			result[key] = o[key].toString();
		} else if (o[key] instanceof Object && !(o[key] instanceof Array)) {
			result[key] = stringifyNumbers(o[key]);
		} else {
			result[key] = o[key];
		}
	}
	return result;
}

stringifyNumbers(obj);
