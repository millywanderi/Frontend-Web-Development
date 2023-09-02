#!/usr/bin/node
// replace builtin
const myString = ('Zach');

// call myString 
myString; // prints Zach

// replace 'h' with 'k'
myString.replace('h', 'k');

// execute myString
myString; // prints Zack


// toUpperCase builtin
myString.toUpperCase(); // Prints ZACH


// Apllying builtin methods together
let str = 'hello world';

// call the variable
str; // returns hello world

// implement toUpperCase and Split builtins
result = str.toUpperCase().split(" "); // turns str into array
result; // return Array [ "HELLO", "WORLD" ]

// use indexOf builtin
result.indexOf("WORLD"); // returns 1
