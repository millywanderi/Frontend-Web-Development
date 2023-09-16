#!/usr/bin/node
// removes the last element from an array and returns that element
const colors = ['blue', 'pink', 'red', 'green', 'black'];

console.log(colors.pop()); // Output: 'black'

console.log(colors); // Output: ['blue', 'pink', 'red', 'green'];

colors.pop(); // Output: 'green'

console.log(colors); // Output: ['blue', 'pink', 'red']