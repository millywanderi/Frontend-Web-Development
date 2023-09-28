#!/usr/bin/node
// Testing a primitive vs an object in js
const str1 = new String("Hello, world!"); // This is an object due to use of builtin String function

const str2 = 'Hello, World!'; // Is primitive

console.log(str1 === str2); // Output: False, They are different type
console.log(str1 == str2); // Output: True, They are same value