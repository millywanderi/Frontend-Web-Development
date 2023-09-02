#!/usr/bin/node
// What does result evaluate to?
const myObj = {
    nestedObject1: {
      price: 100,
      quantity: 5
    },
    nestedObject2: {
      price: 150,
      quantity: 2
    }
  };
  
  const myArray = [myObj.nestedObject1, myObj.nestedObject2];
  
  const result = (myArray[0].price * myArray[0].quantity) > (myArray[1].price * myArray[1].quantity); 

// our expression is simply 100 * 5 > 150 * 2, which can be further simplified to 500 > 300, which equals true.
true