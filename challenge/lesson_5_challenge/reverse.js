#!/usr/bin/node
// reverse function
function solution(str) {
	return str.split('').reverse().join(''); // split converts str to array, reverse reverses the array, and join joins the array together
}
console.log(solution('world')); // Output: 'dlrow'
console.log(solution('word')); // Output: drow
