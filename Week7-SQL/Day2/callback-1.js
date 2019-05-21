"use strict";

const mapWith = (array, callback) => {
  let output = [];
  array.forEach(e => {
    output.push(callback(e));
  });

  return output;
};

const addOne = number => {
  return number + 1;
};

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

//-------------------
const words = ["map", "reduce", "filter"];

const removeSecondLetter = (element) => {
  let newElement = "";
  for (let i = 0; i < element.length; i++) {
    if (i % 2 === 0) {
      newElement += element[i];
    }
  } return newElement;
};

//console.log(secondChar(words));

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']
