#!/usr/bin/node
// slice method that makes a copy of selected objects
const utensils = ["cup", "plate", "spoon", "knife", "glass"];
console.log(utensils.slice(2));  // Output: Array ["spoon", "knife", "glass"]
console.log(utensils.slice(2, 4));  // Output: Array ["spoon", "knife"]
console.log(utensils.slice(1, 5));  // Output: Array ["plate", "spoon", "knife", "glass"]
console.log(utensils.slice(-2));  // Output: Array ["knife", "glass"]
console.log(utensils.slice(2, -1));  // Output: Array ["spoon", "knife"]
console.log(utensils.slice());  // Output: Array ["cup", "plate", "spoon", "knife", "glass"]