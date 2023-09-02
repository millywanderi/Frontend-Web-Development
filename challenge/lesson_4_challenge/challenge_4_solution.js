#!/usr/bin/node
// What does result evaluate to? You might want to review the previous lesson for this one.
const myObj = {
    prop1: 'first value',
    prop2: 20
  };
  
  // Index         0   1   2
  const myArray = [40, 50, 2];
  
  const result = myObj.prop2 === (myArray[0] / myArray[2]);

// solution
const result = 20 === (40 / 2); // true