#!usr/bin/node
// pop method removes the last element from an array and return it
const names = ['Lydia', 'Peace', 'Reginah', 'Dennis', 'Steve'];
console.log(names.pop());  // Output: Steve
console.log(names);  // output: ['Lydia', 'Peace', 'Reginah', 'Dennis']
names.pop();
console.log(names); // output: ['Lydia', 'Peace', 'Reginah']


// calling pop() on non array objects
const example = {
    name: 'Jane',
    age: 22,
    6: 8,
};
console.log(Array.prototype.pop.call(example));  // output: 8
console.log(example); // output: {name: 'jane', age: 22}