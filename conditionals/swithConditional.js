#!/usr/bin/node

// index           0         1        2          3       4
const colors = ['Orange', 'Green', 'Yellow', 'Purple', 'Blue'];

// Get a random between 0 and 4 and store them in a variable
const randomIndex = Math.floor(Math.random() * colors.length);

/*
  To get a value from an array, we use bracket notation.
  Since randomIndex is a random number between 0 and 4, pass it in
  as the index to retrieve a random color in an array.
*/
const randomColor = colors[randomIndex];

// conditionals
if (randomColor === 'Orange') {
  console.log('the color is Orange');
} else if  (randomColor === 'Green') {
  console.log('the color is Green');
} else if (randomColor === 'Yellow') {
  console.log('the color is Yellow');
} else if (randomColor === 'Purple') {
  console.log('the color is Purple');
} else if (randomColor === 'Blue') {
  console.log('the color is Blue');
} else {
  console.log('no color found');
}
