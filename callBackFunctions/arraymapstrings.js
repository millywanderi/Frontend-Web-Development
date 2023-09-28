#!/usr/bin/node
// call back function for strings
const strArray = ["Hello", "World", "my", "name", "is", "Millie"];

// create a callback function
function myCustomOperationCallback(itemFromArray) {
    return itemFromArray * 2;
}
// redefining already existing callback function
strArray.map(itemFromArray => itemFromArray[0]); // Output: Array(6) [ "H", "W", "m", "n", "i", "M"]