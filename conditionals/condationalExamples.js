#!/usr/bin/node

const firstNumber = 20;
const secondNumber = 10;

const jsExpression = firstNumber > secondNumber; // true
if (jsExpression) {
  console.log('this expression is true')
} else if (firstNumber > 0) {
  console.log('the expression is false and the firstNumber is greater than 0')
} else {
  console.log('this expression is false and firstNumber is 0 or less')
}
