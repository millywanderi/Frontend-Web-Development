#!/usr/bin/node
// Method that returns first index of at which array element is found or -1 if not found
const names = ["Lydia", "Peace", "Steve", "Silas", "Nzuva", "Steve"];
console.log(names.indexOf("Steve"));  // Output: 2

// Start from index 3
console.log(names.indexOf("Steve", 3));  // Output: 5
console.log(names.indexOf("Naomi"));  // Output: -1 because Naomi does not exists
