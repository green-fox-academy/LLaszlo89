'use strict';

/* let lineCount: number = 4;
 */
// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
function pyramid(n) {
 
    for(let i=1; i<= n; i++){
      let str = ' '.repeat(n-i);
      let str2 = '#'. repeat(i*2 -1)
   
      console.log(str + str2 + str);
    }
  }