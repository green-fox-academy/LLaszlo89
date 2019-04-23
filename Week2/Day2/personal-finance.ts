/* We are going to represent our expenses in a list containing integers.

Create a list with the following items.
500, 1000, 1250, 175, 800 and 120
Create an application which solves the following problems.
How much did we spend?
Which was our greatest expense?
Which was our cheapest spending?
What was the average amount of our spendin/*  */ 

'use strict'
//1
let list: any[] = [500,1000,1250,175,800,120];
let allSpendings= 0;
//2
for( let i=0; i<list.length; i++){
  allSpendings += list[i]
}
console.log(allSpendings);

list.sort(function(a, b) {
  return a - b;
});
console.log(list);

console.log('The cheapest spending was: '+ list[0]);
console.log('The greatest spending was: '+ list[5]);

console.log('The average: '+  allSpendings / list.length );

/* var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); */
