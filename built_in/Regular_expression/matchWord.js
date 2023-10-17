// Matches whole word using regrex
const word = new RegExp('code');
const word1 = 'I love coding';
const word2 = 'This code has a bug';
const word3 = 'Will you mind fixing this code for me please';

console.log(word.test(word1)); // False
console.log(word.test(word2)); // True
console.log(word.test(word3)); // True
