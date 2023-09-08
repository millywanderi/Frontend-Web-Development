#!/usr/bin/node
// In this simple assignment you are given a number and have to make it negative.
// But maybe the number is already negative?

function makeNegative(num) {
    if (num < 0) { // checks if the number is negative
        return num; 
    } else {
        return num * - 1;
    }
  }