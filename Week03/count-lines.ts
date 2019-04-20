// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
'use strict';

const fs = require('fs');

function lineCounter(name:string):number {
  try{
let fileCountent = fs.readFileSync('valajjmi.txt', 'utf8');
let arrayForLines = fileCountent.split('\r\n');
return arrayForLines.length;

  }
catch{
  return 0;
}
}
console.log(lineCounter('valami.txt'));



