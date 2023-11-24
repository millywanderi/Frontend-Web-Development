#!/usr/bin/node
// creates a shallow copy of a portion of a given array,
// filtered down to just the elements from the given array
// that pass the test implemented by the provided function.
const houseHoldItems = ['chair', 'table', 'utensils', 'bucket'];
const len = houseHoldItems.filter((item) => item.length > 5);
console.log(len);  // output: Array ['utensils', 'bucket']