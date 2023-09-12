#!/usr/bin/node
// Sum of digits in the root
function digitalRoot(n) {
    while (n >= 10) {
      n = sumDigits(n);
    }
    return n;
  }
  
  function sumDigits(num) {
    return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  }