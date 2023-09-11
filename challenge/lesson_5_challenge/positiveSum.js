#!/usr/bin/node
// You get an array of numbers, return the sum of all of the positives ones.
// Note: if there is nothing to sum, the sum is default to 0

function positiveSum(arr) {
  let sum = 0;

  // iterate through the length of a str
  for (let m = 0; m < arr.length; m++){
    if (arr[m] > 0) {
        sum = sum + arr[m];
    }
  }
  return sum;
}