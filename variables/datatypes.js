#!/usr/bin/node

const variable1 = 10; // integer
const variable2 = variable1;
const variable3 = 'Zach'; // string
const variable4 = { // object
  variableType: 'object',
  variableValue: 'some value',
};
const variable5 = (function () { // function
  return 'Hello! My name is ';
})();
const variable6 = variable5 + variable3;
console.log(variable6);
