#!/usr/bin/node
// A method that executes a provided function once for each array element.
const arr = ['a', 'b', 'c'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); 
}  // output: Array ['a', 'b', 'c']

// using forEach method
arr.forEach((element) => {
    console.log(element);
});  // output: Array ['a', 'b', 'c']