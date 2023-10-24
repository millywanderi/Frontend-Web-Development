#!/usr/bin/node
// Use of split method

// empty string
const emptyStr = "";
console.log(emptyStr.split("b")); //  Output: [""] str is empty and separator is non-empty
console.log(emptyStr.split(emptyStr)); // Output: [] str and operator are both empty strings

// fuction that splits strings with a separator
function splitStr(strToSplit, separator) {
	const arrayOfStr = strToSplit.split(separator);

	console.log("The original string is:", strToSplit);
	console.log("The separator is:", separator);
	console.log(
		"The array has",
		arrayOfStr.length,
		"elements:",
		arrayOfStr.joi(" / "),
	);
}

const tempestStr = "Oh brave new world that has such people in it.";
const monthStr = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const space = " ";
const comma = ",";

splitStr(tempestStr, space);
splitStr(tempestStr);
splitStr(monthStr, comma);

// Output

/*
The original string is: "Oh brave new world that has such people in it."
The separator is: " "
The array has 10 elements: Oh / brave / new / world / that / has / such / people / in / it.

The original string is: "Oh brave new world that has such people in it."
The separator is: "undefined"
The array has 1 elements: Oh brave new world that has such people in it.

The original string is: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
The separator is: ","
The array has 12 elements: Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec
*/
