#!/usr/bin/node
// determines whether an array includes a certain value among its entries
// returning true or false as appropriate
const names = ['Kylie', 'Kinsley', 'Lyle'];

console.log(names.includes('Lyle')); // Output: True

const arr = [1, 2, 3, 4];

console.log(arr.includes(7)) // Output: False

const months = ['January', 'May', 'July'];

console.log(months.includes('July')); // Output: True
console.log(months.includes('April')); // Output: False