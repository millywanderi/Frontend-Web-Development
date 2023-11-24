#!/usr/bin/node
// method that creates a new array populated with the results of calling a provided function on every element in the calling array.
const arr = [1, 2, 3, 4, 5];
const map1 = arr.map((x) => x * 2);
console.log(map1);  // Output: Array [2, 4, 6, 8, 10]

// A complex one
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
        lastName: "Njogu"
    }
];
console.log(moreComplexArr.findIndex((arrItem) => {
    arrItem.lastname = "Nzuva";
    return arrItem;
})); 
// Output
[
    {
        firstName: "Steve",
        lastName: "Nzuva"
    },
    {
        firstName: "Silas",
        lastName: "Nzuva"
    },
    {
        firstName: "Lydia",
        lastName: "Nzuva"
    },
    {
        firstName: "Peace",
        lastName: "Nzuva"
    }
]
