#!/usr/bin/node
// create an improper return funtion
const improperFunction = () => {
	let myNumber = 20;
	return myNumber;
	myNumber = 50; // unreachable code after return statement
}

// call the function
improperFunction(); // returns 20 since we returned it before 50


// another example
const num = 20; // global scope variable

// declare the function
let myFunction = () => {
	if (num < 15) { // it can access the global variable since the function does not have a parameter
		return 'returned the function early';
	}
	return 40;
}

// execute the function
myFunction(); // it returns 40 since num is greater than 15
