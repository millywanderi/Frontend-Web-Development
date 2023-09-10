#!/usr/bin/node
// Return the average of the given array rounded down to its nearest integer.
function getAverage(marks) {
    const count = marks.length; // Checks the number length
    let sum = 0;

    for (let i = 0; i < count; i++) {
        sum = sum + marks[i];
    }
    return Math.floor(sum / count); // Calculates the array average
}