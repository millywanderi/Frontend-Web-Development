#!/usr/bin/node
// create a function
function myFunction() {
	return 20;
}

// execute the function
myFunction(); // returns 20

// allocate the function in an alias variable
const aliasVariable = myFunction;

// call alias variable
aliasVariable(); // returns 20 since it stores function myFunction

// store myFunction in objects
const myObj = {
	prop1: 50,
	prop2: myFunction,
}

// get prop2 of the object
myObj.prop2(); // returns 20
