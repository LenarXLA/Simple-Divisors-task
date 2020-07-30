'use strict';

function isSimpleNum (num) {
	for (let i = 2; i < num; i++) {
		return num % i !== 0;
	}
}

function getSimpleDivisors (val) {
	let arr = [];
	for (let i = 1; i <= val; i++) {
		if (isSimpleNum (i)) {
			arr.push(i);
		}
	}
	return arr;
}

console.log(getSimpleDivisors (50));