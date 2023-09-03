#!/usr/bin/node
// multiply function
multiply = function (a, b) {
	return a * b;
}

// another ways to conduct multiplication
// way 1
multiply = (a, b) => a * b;

// way2
function multiply(a, b){
	  if (!a || !b || typeof(a) != "number" || typeof(b) != "number") {
		      return 0;
		    }
	  return a * b;
}
