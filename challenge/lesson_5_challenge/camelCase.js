#!/usr/bin/node
// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
function toCamelCase(str) {
    // Split the input string by dashes or underscores
    const words = str.split(/-|_/);
  
    // Capitalize the first letter of each word except the first one
    const camelCaseWords = words.map((word, index) => {
      if (index === 0) {
        return word; // Keep the first word as is
      } else {
        // Capitalize the first letter of the word
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    });
  
    // Join the words back together to form the camelCase string
    return camelCaseWords.join('');
  }  