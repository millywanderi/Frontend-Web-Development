#!usr/bin/node
// use of builtin match string method
const regrex = /[a-z]+/  // matches one or more lowercase alphabets
const str = 'abcdefghijklmn123456789';
console.log(regrex.exec(str)); // output: Array [ "abcdefghijklmn" ]

// another way to attain the same results is through string.match method 
console.log(str.match(regrex));  // output: Array [ "abcdefghijklmn" ]