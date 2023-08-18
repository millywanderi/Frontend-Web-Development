#!/usr/bin/node

// && operator
const myVariable = 20;
const anotherVariable = 10;

const result = myVariable === myVariable && anotherVariable === anotherVariable;

console.log(result); // returns true

// || operator
const num1 = 20;
const num2 = 10;

const result1 = num1 === num1 || num2 === num2;

console.log(result1); // returns true since all the variables are equal

// ! operator
const num3 = !(20 === 20);

console.log(num3); // returns false since the ! reverses the result

const isUserLoggedIn = true;
const doesUserHavePermissions = false;

const canUserPerformAction = isUserLoggedIn && doesUserHavePermissions;

console.log(canUserPerformAction); // returns false

const result2 = !(((40 / 20) === 2 && true) || ('yes' === 'no'));

console.log(result2);

const step1 = 40 / 20;
const step2 = step1 === 2;
const step3 = step2 && true;
const step4 = 'yes' === 'no';
const step5 = step3 || step4;
const step6 = !step5;

console.log(step6);
