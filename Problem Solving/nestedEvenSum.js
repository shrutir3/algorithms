/**
 * Write a function called nestedEvenSum. Return the sum of all even numbers in an object which may contain
 * nested objects.
 */

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

function nestedEvenSum(o) {
	let sum = 0;
	for (let key in o) {
		if (typeof o[key] === "number" && o[key] % 2 === 0) {
			sum += o[key];
		} else if (o[key] instanceof Object) {
			sum += nestedEvenSum(o[key]);
		}
	}
	return sum;
}

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
