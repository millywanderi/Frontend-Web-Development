#!/usr/bin/node

for (let i = 0; i < 100; i++) {
  console.log(i); // returns 0-99
}

const arr = ['Milly', 'John', 'Kylie', 20, 10, 5];

// iterate through the array
for (let m = 0; m < arr.length; m++) {
  if (typeof arr[m] === 'number') {
    console.log(arr[m]);
  }
}
