#!/usr/bin/node
// Comparing two objects using isEqual method
const obj1 = {prop1: 'some value'};
const obj2 = {prop1: 'some value'};
const res = obj1 === obj2;
console.log(res);  // output: False

// application of isEqual method
_.isEqual(obj1, obj2);  // output: True