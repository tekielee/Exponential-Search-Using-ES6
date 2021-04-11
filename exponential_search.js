function exponentialSearch(array, key) {
	let size = array.length;
	if(size === 0) {
		return false;
	}
	let bound = 1;
	while(bound < size && array[bound] < key) { 
		bound *= 2;
	}
	return binarySearch(array, key, parseInt(bound/2), min(parseInt(bound), size));
}

function binarySearch(array, key, low, high) {
	if(high < low) {
		return false;
	}
	let mid = Math.floor((high + low)/2);
	if(array[mid] > key) {
		return binarySearch(array, key, 0, mid - 1);
	} else if(array[mid] < key) {
		return binarySearch(array, key, mid + 1, high);
	} else {
		return true;
	}
}

let numbers = [10, 20, 31, 65];
let num = 31;
if(binarySearch(numbers, num, 0, numbers.length) !== false) {
	console.log('Found number: ' + num);
} else {
	console.log('Not Found number: ' + num);
}

let num2 = 32;
if(binarySearch(numbers, num2, 0, numbers.length) !== false) {
	console.log('Found number: ' + num2);
} else {
	console.log('Not Found number: ' + num2);
}