#!/usr/bin/node
// A method that executes a user-supplied "reducer" callback function on each element of the array, in order, 
// passing in the return value from the calculation on the preceding element.
const arr = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue,
);  
console.log(sumWithInitial);  // otuput: 10

// complex one
const arr1 = [100, 200, 300, 400];
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
}
console.log(sum);  // output: 1000

function reduceCallBack(sum, arrItem) {
    return sum += arrItem;
}
const result = arr1.reduce(reduceCallBack, 0);
console.log(result);  // output: 100