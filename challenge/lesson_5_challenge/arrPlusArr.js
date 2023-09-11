#!/usr/bin/node
// get the sum of two arrays
function arrayPlusArray(arr1, arr2) {
    // Calculate the sum of elements in arr1 using the reduce() method
    const sum1 = arr1.reduce(function (acc, currentValue) {
        return acc + currentValue;
      }, 0);
    
      // Calculate the sum of elements in arr2 using the reduce() method
      const sum2 = arr2.reduce(function (acc, currentValue) {
        return acc + currentValue;
      }, 0);
    
      // Add the two sums together
      const totalSum = sum1 + sum2;
    
      return totalSum;
}
// Example usage:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const result = arrayPlusArray(array1, array2);
console.log(result); // Output: 21 (1 + 2 + 3 + 4 + 5 + 6)