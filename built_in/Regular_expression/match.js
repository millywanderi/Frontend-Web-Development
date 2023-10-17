// Test for letter m match
const mach = new RegExp('m'); // Letter to match
const str1 = 'I love you';
const str2 = 'my love for you is unexplainable';

// Test the cases
console.log(mach.test(str1)); // Returns False
console.log(mach.test(str2)); // Returns True
