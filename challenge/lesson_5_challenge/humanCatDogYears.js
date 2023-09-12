#!/usr/bin/node
// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]

var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 0;
    let dogYears = 0;

    if (humanYears >= 1) {
        catYears += 15; // First year for a cat
        dogYears += 15; // First year for a dog
    }

    if (humanYears >= 2) {
        catYears += 9; // Second year for a cat
        dogYears += 9; // Second year for a dog
    }

    if (humanYears >= 3) {
        catYears += (humanYears - 2) * 4; // Cat years after the first two years
        dogYears += (humanYears - 2) * 5; // Dog years after the first two years
    }

    return [humanYears, catYears, dogYears];
    }