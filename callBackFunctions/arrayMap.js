#!/usr/bin/node
// creates a new array populated with the results of calling
// a provided function on every element in the calling array
const array1 = [1, 4, 9, 16];

function myCustomMapOperationCallback(itemFromArray) { // Iterating on the array
    return itemFromArray * 2; // this takes every item in array1 and multiply by 2
}

// pass a function to the map
const newArray = array1.map(myCustomMapOperationCallback); // this call back the function

console.log(newArray); // Output: Array [ 2, 8, 18, 32]