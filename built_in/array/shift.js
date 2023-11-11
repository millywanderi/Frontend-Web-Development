#!usr/bin/node
// shift array builtin method that removes the first element of an array and returns it
const num = [23, 45, 96];
const firstNum = num.shift();
console.log(num);  // output: [45, 96]
console.log(firstNum);  // output: 23

// Remove an element from a non array
const names = ["Mercy", "Lydia", "Peace", "Jane"];
console.log("names before:" names);  // output: names before: ["Mercy", "Lydia", "Peace", "Jane"]
const shifted = names.shift();
console.log("names after:" names);  // Output: names after: ["Lydia", "Peace", "Jane"]
console.log("removed name:" shifted); // output: removed name: Mercy

// shift method in a while loop
const animals = ["Rabbit", "Hyena", "Goat", "lion"];
while (typeof (i = animals.shift()) != undefined) {
    console.log(i);  // output: Hyena, Goat, Lion
}