'use strict'

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test


let numList= [1,2,3,8,5,6,8,5,888,8,888,];
let result=numList.map( currentNum => { 
  return currentNum === 8 ? 4: currentNum
  

} );
console.log(result);


