#!/usr/bin/node
// The first century spans from the year 1 up to and including the year 100,
// the second century - from the year 101 up to and including the year 200, etc.
// Given a year, return the century it is in.

function century(year) {
    // Calculate the century by dividing the year by 100 and rounding up
    return Math.ceil(year / 100);
}
// execute
console.log(century(1705)); // Output: 18
console.log(century(1900)); // Output: 19
console.log(century(1601)); // Output: 17
console.log(century(2000)); // Output: 20