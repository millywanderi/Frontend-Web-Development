#!usr/bin/node
// unshift method that adds an element at the beginning of an array
const clothes = ["skirt", "shirt", "dress"];
console.log(clothes.unshift("tie", "jacket"));
console.log(clothes);  // output: ["tie", "jacket", "skirt", "shirt", "dress"]