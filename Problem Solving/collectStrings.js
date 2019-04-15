/**
 * Write a function called collectStrings, which accepts an object and returns an array of all the values in the object
 * that have a typeof string.
 */

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

function collectStrings(o) {
	let newArr = [];
	for (let key in o) {
		if (typeof o[key] === "string") {
			newArr.push(o[key]);
		} else {
			newArr = newArr.concat(collectStrings(o[key]));
		}
	}
	return newArr;
}

collectStrings(obj) // ["foo", "bar", "baz"])
