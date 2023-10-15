#!/usr/bin/node
// email validator
const emailValidatorRegrex = new RegExp('^.+@.+\..+$');
const userInput = 'invalidemail@g';
const isValid = emailValidatorRegrex.test(userInput); // Tests if the userInput is true or false
console.log(isValid); // False
