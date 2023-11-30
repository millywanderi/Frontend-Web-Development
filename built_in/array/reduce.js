#!/usr/bin/node
// A method that executes a user-supplied "reducer" callback function on each element of the array, in order, 
// passing in the return value from the calculation on the preceding element.
const arr = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue,
);  
console.log(sumWithInitial);  // otuput: 10