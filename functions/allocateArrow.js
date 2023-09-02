#!/usr/bin/node
// declare the function
const myFunction = () => {
	console.log('something');
}
// call the function by allocating it in a variable
const result = myFunction();

// another example using return
const anotherFunction = () => {
	const a = 20;
	return a;
}
// assign function to a variable
const res = myFunction();

// call the result and it prints 20
result;


// writing an expression
const myFunction2 = () => {
	const b = 40;
	return b > 30; // true
}
// assign the function to a variable
const result2 = myFunction2();
// call result2 and it prints out true
result2;
