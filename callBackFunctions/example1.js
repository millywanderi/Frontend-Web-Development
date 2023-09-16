#!/usr/bin/node

function myCallback(someNumber) {
    return someNumber * 2;
}
function mainFunction(randomNumber, shouldCall, callback) {
    let result = randomNumber; // result === 20

    if (shouldCall) { // should call is 'true' to reach the call back
        result = callback(randomNumber); // 'callback' represents 'myCallback function above'
    }
    return result;
}
mainFunction(20, true, myCallback); // Output: 40