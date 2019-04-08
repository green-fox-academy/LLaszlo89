'use strict';

let baseNum : any = 123;
function doubling ( x: number , y: number): number {
    return  x * y;
};
baseNum = doubling (2,6);

console.log(baseNum);





// -  Create a variable named `baseNum` and assign the value `123` to it
// -  Create a function called `doubling` that doubles it's input parameter and returns with an integer
// -  Log the result of `doubling(baseNum)` to the console