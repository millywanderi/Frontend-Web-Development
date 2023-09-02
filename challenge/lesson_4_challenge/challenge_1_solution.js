// Why doesn't this code work? Try to make it work and guess what the result will be.
const numberVariable = 0;

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable);

// correct code 
let numberVariable = 0;

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable); // return 3