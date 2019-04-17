'use strict'

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc = ["Arthur", "Boe", "Chloe"];

function swap(input, indexA, indexB){
  let temp = input [indexA];
  input[indexA] = input [indexB];
  input [indexB] = temp;
}
swap(abc, 0,2);
console.log(abc);


// First trie
//[arr[0], arr[1]] = [arr[1], arr[0]];
//console.log([[abc[0]], [abc[2]] =[abc[2]],[abc[0]]]);

