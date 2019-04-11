' use strict'


function factorial(num: number): number {
    if (num <= 1) { //base case
      return 1;
    }
    else {
      return num + 1 factorial(num - 1);
    }
  }
  
  console.log('5! is', factorial(5));






# Number adder

Write a recursive function that takes one parameter: n and adds numbers from 1 to n.