#!/usr/bin/node
// returns even or odd number
function evenOrOdd(number) {
	var even = [];
	var odd = [];

	for (var m = 0; m < number.length; m++) { // iterates through the elements of the number array
		if (number[m] % 2 === 0) { // checks if the number is even
			even.push(number[m]);
		} else {
			odd.push(number[m]);
		}
		if (even.length === 1) {
			return even[0];
		} else {
			return odd[0];
		}
	} 
}
