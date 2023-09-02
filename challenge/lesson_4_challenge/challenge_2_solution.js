#!/usr/bin/node
// Do the following two blocks of code result in the same answer? 
// If not, which one would you recommend using and why?
const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber === secondNumber;

console.log(result);

const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber == secondNumber;

console.log(result);

// No, they do not result in the same answer. 
// The first code block will evaluate to false while the second code block will evaluate to true
const firstNumber = 20;
const secondNumber = 20;

const result = firstNumber === secondNumber;

console.log(result);