'use strict'
let countUntil: number = 5;
let startNumber: number = 0;

function sum(): number {
  for (let i: number = 0; i <= countUntil; i++) {
    startNumber = i + startNumber;
  }
  
  return startNumber;
}

console.log(sum());


// Write a function called `sum` that returns 



//the sum of numbers from zero to the given parameter