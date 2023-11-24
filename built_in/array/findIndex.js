#!/usr/bin/node
// returns the index of the first element in an array that satisfies the provided testing function
const arr = [1, 2, 3, 10, 15];
const largeNumber = (element) => element > 10;  // Callback function executes each element of an array
console.log(arr.findIndex(largeNumber));  // Output: 4

// More complex array
const moreComplexArr = [
    {
        firstName: "Steve",
        lastName: "Njogu"
    },
    {
        firstName: "Silas",
        lastName: "Njogu"
    },
    {
        firstName: "Lydia",
        lastName: "Njogu"
    },
    {
        firstName: "Peace",
        lastName: "Mulei"
    }
];
console.log(moreComplexArr.findIndex((arrItem) => {
    return arrItem.lastName !== Njogu;
}));  // Output: 3
