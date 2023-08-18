#!/usr/bin/node

/*
  The != and the !== is the opposite of == and ===
  In objects and arrays, you cannot compare different objects and arrays
  Other comparison operators include <, >, <=, >=
*/

// === operator
const num1 = 20;
const num2 = 20;

const result = num1 === num2;

console.log(result);

const str1 = 'hello';
const str2 = 'world';

const res = str1 === str2;

console.log(res);

// === operator on arrays and objcets
const myArray = [1, 2, 3, 4, 5];
const anotherArray = [1, 2, 3, 4, 5];

const compareArray = myArray === myArray;
const compareAnotherArray = myArray === anotherArray;

console.log(compareArray); // The answer is true
console.log(compareAnotherArray); // the answer is false

// === on objects
const myObject = {
  property1: 'some value',
  property2: 20,
};

const anotherObject = {
  property1: 'some value',
  property2: 20,
};

const compareMyObject = myObject === myObject;
const compareAnotherObject = myObject === anotherObject;

console.log(compareMyObject); // returns true
console.log(compareAnotherObject); // return false

// == operator. It first converts the variables in same value and then compares them
const stringValue = '20';
const numberValue = 20;

const result1 = stringValue == numberValue;

console.log(result1);

// ternary operator
const result2 = 20 === 20 ? 'values match' : 'values do not match';

console.log(result2); // returns values match
