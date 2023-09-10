#!/usr/bin/node
// create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. 
// You don't have to worry with strings with less than two characters.
function removeChar(str){
    // check if the str has at least 2 char
    if (str.length >= 2) {
        // use substring to remove first and last char
        return str.substring(1, str.length - 1);
    } else {
        // if str has < 2 char, return an empty str
        return ""; 
    }
   
   };