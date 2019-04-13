'use strict'

// -  Create a function called `factorio`
//    that returns it's input's factorial



function factorio(input: number = 0): number {
  let result: number = 1;
  for (let i = 1; i <= input; i++) {
    result *= i;
  }
  return result;
}

console.log(factorio(4));