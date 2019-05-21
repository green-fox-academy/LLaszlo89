"use strict";

// Write a program that prints apple after 3 seconds.

setTimeout(() => {
  console.log("apple"); // prints after one second
}, 3000);

("use strict");

// Write a program that prints the following fruits:
// apple -> immediately
// pear  -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

let fruits = ["apple","pear", "melon", "grapes"];

const timedPrinter = (arr, callback) => {
    console.log(fruits[0]);
    setTimeout(() => { console.log( fruits[1])}, 1000 );
    setTimeout(() => { console.log( fruits[2])}, 3000 );
    setTimeout(() => { console.log( fruits[3])}, 5000 );
};
timedPrinter(fruits);