#!/usr/bin/node
// Given an array of integers, return a new array with each value doubled.

function maps(x){
    // mpa method to create a new array with doubled value
    const doubleArray = x.map(function (value){
      return value * 2;
    });
    return doubleArray;
  }
// execute the function
const arr = [1, 2, 3];
const doubleResult = maps(arr);
console.log(doubleResult);  // Output: [2, 4, 6]