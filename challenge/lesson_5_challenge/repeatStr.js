#!/usr/bin/node
// Write a function that accepts an integer n and a string s as parameters,
// and returns a string of s repeated exactly n times.
function repeatStr (n, s) {
    return s.repeat(n);
  }
// Examples
console.log(repeatStr(6, 'I')); //prints IIIIII
console.log(repeatStr(5, 'Hello'));  // output: HelloHelloHelloHelloHello