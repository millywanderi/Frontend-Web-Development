#!/usr/bin/node

// Object datatype uses {} to create objects
const objVariable = { name: 'Milly', age: 29 };

// to access object variable, we can use dot notation
console.log(objVariable.name);

// one can use dot notation to access nested object
const nestedObject = {
  layer1: {
    layer2: {
      layer3: {
        targetValue: 20,
      }
    }
  }
}
console.log(nestedObject.layer1.layer2.layer3.targetValue);

// One can also retrieve an object using bracket notation
console.log(objVariable['age']);
