#!/usr/bin/node
// Change the elements of an array by removing and replacing them
const days = ["monday", "wednesday", "thursday", "saturday"];
days.splice(1, 0, "tuesday");
console.log(days);  // Output: ["monday", "tuesday", "wednesday", "thursday", "saturday"]
days.splice(4, 1, "friday");
console.log(days);  // Output: ["monday", "tuesday", "wednesday", "thursday", "friday"]