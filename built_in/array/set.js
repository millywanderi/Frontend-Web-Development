const mySet1 = new Set();

mySet1.add(1);  // Set(1) { 1 }
mySet1.add(5);  // Set(2) { 1, 5 }
mySet1.add(5);  // Set(2) { 1, 5 }
mySet1.add('some text');  // Set(3) {  1, 5, 'some text' }
const m = { a: 1, b: 2 };
mySet1.add(m);

mySet1.add({ a: 1, b: 2 });  // m is referencing a different object, so this is okay

mySet1.has(5); // true
mySet1.has(8); // false
mySet1.has(m); // true
mySet1.has('Some Text'.toLowerCae());  // true
