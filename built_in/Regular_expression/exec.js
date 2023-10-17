// exec method
const regrex = new RegExp('favorite');
const str1 = 'my favorite food is pilau';

console.log(/[a-z]/.exec(str1)); // Returns Array [ 'm' ] cz it matches with the first character
console.log(/[a-z]*/.exec(str1)); // Returns Array [ 'my' ] matches 0 or more characters
console.log(/[a-z]+/.exec(str1)); // Returns Array [ 'my' ] 0 or more characters
console.log(/[a-z]?/.exec(str1)); // Returns Array [ 'm' ] 0 or more characters
console.log(/[a-z ]*/.exec(str1)); // Returns Array [ 'my favorite food is pilau' ] it is checking for all characters in the string
console.log(/[a-z ]+/.exec(str1)); // Returns Array [ 'my favorite food is pilau' ] it is checking for all characters in the string

console.log(/[a-z ]{5}/.exec(str1)); // Returns Array ['my fa']
console.log(/[a-z ]{2, 6}/.exec(str1)); // Returns Array ['my fav']
