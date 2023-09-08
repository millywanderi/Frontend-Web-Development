#!/usr/bin/node
// Given an array of integers your solution should find the smallest integer.
class SmallestIntegerFinder {
    findSmallestInt(args) {
        if (args.length === 0) {
            throw new Error('Array should not be empty.');
        }
        let smallest = args[0]; // Initialize the smallest with the first element

        for (let i = 1; i < args.length; i++) {
            if (args[i] < smallest) {
                smallest = args[i];
            }
        }
        
        return smallest;
  }
}