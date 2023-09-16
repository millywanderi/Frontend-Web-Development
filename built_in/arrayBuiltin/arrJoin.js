#!/usr/bin/node
// concatenates eements of an array

const elements = ['I', 'Love', 'You'];

// If a separator is omited, the element are joined and separated bya comma
console.log(elements.join()); // Output: I,Love,You

// When the separator is specified
console.log(elements.join('')); // Output: ILoveYou

console.log(elements.join('-')); // Output: I-Love-You