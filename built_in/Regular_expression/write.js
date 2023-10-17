// Write a regrex that matches with a string
const str = 'hello world, 2021  @ more of a string';
const regrex = /^[a-z ]+,[0-9 ]+@[a-z ]+$/

// to print it out
console.log(regrex.exec(str)); // output: Array [ 'hello world, 2021  @ more of a string' ]

// another way to write the regrex
const regrex1 = /.+/
console.log(regrex1.exec(str)); // output: Array [ 'hello world, 2021  @ more of a string' ]
