// Use special  characters
const special = new RegExp('favorite');
const str1 = 'My favorite number is @2023';
const str2 = 'my favorite thing to do is code';

// Test groups
console.log(/[A-Za-z0-9]/.test(str1)); // Returns True
console.log(/[A-Za-z0-9]/.test(str2)); // Returns False as it does not have numbers and capital letters

// Test any character
console.log(/./.test(str1)); // Returns True
console.log(/./.test(str2)); // Returns True

// Test all numbers/ can also be tested using [0-9]
console.log(/\d/.test(str1)); // Returns True
console.log(/\d/.test(str2)); // Returns False

// Test for whitespaces
console.log(/\s/.test(str1)); // Returns True
console.log(/\s/.test(str2)); // Returns True

// Test for all letters in numbers ie alphanumeric
console.log(/\w/.test(str1)); // Returns True
console.log(/\w/.test(str2)); // Returns True

// Test for character at the beginning of the line
console.log(/^m/.test(str1)); // Returns False
console.log(/^m/.test(str2)); // Returns True

// Test for character at the end of the line
console.log(/e$/.test(str1)); // Returns False
console.log(/e$/.test(str2)); // Returns True

// match words or numbers
console.log(/(@2023 | code)/.test(str1)); // Returns True
console.log(/(@2023 | code)/.test(str1)); // Returns True
