#!/usr/bin/node
// create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2)
{
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            if (value2 === 0) {
                return 'Division by zero is not allowed';
            }
            return value1 / value2;
    default:
        return 'Invalid operation';
    }
}