#!/usr/bin/node
// subString method
const str = "Happy holidays";
console.log(str.substring(4)); // Output: Happy -> when you give one index, it returns the whole name
console.log(str.substring(2, 5)); // Output: ppy -> Start counting from the index and don't include 
// the last letter where last index is applied


// use substring() to capitalize a single letter of a sentence
const str1 = "merry christmass";
console.log(str1[0].toUpperCase() + str1.substring(1, str1.length)); // Output: Merry christmass