# JavaScript Loops
## Introduction
Loops in JavaScript are used to execute a block of code repeatedly until a certain condition is met. They are powerful constructs that help automate repetitive tasks.

## Types of Loops in JavaScript
* for loop: Executes a block of code a specified number of times.
* while loop: Executes a block of code while a specified condition is true.
* do...while loop: Similar to while loop but ensures the code block is executed at least once before checking the condition.

## Usage

* for Loop

The for loop is structured as follows:
for (initialization; condition; iteration) {
  // code block to be executed
  }
* Initialization: Executes once at the beginning and usually initializes a counter variable.
* Condition: Checked before each iteration. If true, the loop continues. If false, the loop stops.
* Iteration: Executed at the end of each loop iteration, typically updating the counter variable.

### Example:

for (let i = 0; i < 5; i++) {
  console.log(i);
  }

* while Loop

The while loop continues executing a block of code while a specified condition is true:
while (condition) {
  // code block to be executed
  }

### Example:

let i = 0;
while (i < 5) {
  console.log(i);
    i++;
	}

