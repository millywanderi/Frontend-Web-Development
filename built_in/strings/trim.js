#!/usr/bin/node
// trim method to remove whitespaces from both end of a string
const str = "    I love you    ";
console.log(str.trim()); // Output: I love you

// how to remove whitespaces in multiple areas
const register = [
    {
        name: 'Hana Tuli     ',
        town: 'Kitui'
    },
    {
        name: '  Handsome Boy',
        town: 'Nyeri'
    },
    {
        name: '  Mary Jane  ',
        town: 'Kakamega'
    }
];

// remove the whitespaces
for (let i = 0; i < register.length; i++) {
    currentName = register[i].name;
    currentTown = register[i].town;

    register[i].name = currentName.trim();
    register[i].town = currentTown.trim();
}
