'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;
let allSecondsInaDay: number = 86400;
console.log("Remaining seconds: ",  allSecondsInaDay -  ((currentHours * 60)*60)  + (currentMinutes  * 60) + currentSeconds ,"sec.");

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables