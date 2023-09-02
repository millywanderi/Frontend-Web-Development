#!/usr/bin/node
/*
What does expression5 evaluate to? How could you write this in a single line of code 
(for exercise purposes only;you would never want to combine all this in one line)?
*/ 

const expression1 = 100 % 50;
const expression2 = 100 / 50;
const expression3 = expression1 < expression2;
const expression4 = expression3 && 300 + 5 === 305;
const expression5 = !expression4;

console.log(expression5);

// Answer
// Expression1
const expression1 = 100 % 50; // return 0

// Expression2
const expression2 = 100 / 50; // return 2

// Expression3
const expression3 = expression1 < expression2; // return true

// Expression4
const expression4 = expression3 && 300 + 5 === 305; // true

// Expression5
const expression5 = !expression4; // false

// This code in one line
const result = !(((100 % 50) < (100 / 50)) && 300 + 5 === 305);

console.log(result);