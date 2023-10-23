#!/usr/bin/node
// Slice builtin method in strings
const str1 = "Today is a beautiful day." // len(str1) is 25.
const str2 = str1.slice(1, 8);
const str3 = str1.slice(4, -2);
const str4 = str1(12);
const str5 = str1.slice(30);

console.log(str2); // Output: oday is
console.log(str3); // Output: y is a beautiful da
console.log(str4); // Output: eautiful day.
console.log(str5); // Output: ""

// slice using negative indexes
const str = "Today is a beautiful day." // len(str) is 25.
console.log(str.slice(-3)); // 'ay.'
console.log(str.slice(-3, -1)); // 'ay'
console.log(str.slice(0, -1)); // 'Today is a beautiful day'
console.log(str.slice(4, -1)) // 'y is a beautiful day'
