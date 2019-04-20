'use strict'
/* Create a list ('List A') which contains the following values
Apple, Avocado, Blueberries, Durian, Lychee
Create a new list ('List B') with the values of List A
Print out whether List A contains Durian or not
Remove Durian from List B
Add Kiwifruit to List A after the 4th element
Compare the size of List A and List B
Get the index of Avocado from List A
Get the index of Durian from List B
Add Passion Fruit and Pummelo to List B in a single statement
Print out the 3rd element from List A */
//1&2
let listA:string[]=['Apple',' Avocado', 'Blueberries', 'Durian' , 'Lychee'];
let listB:string[]=['Apple',' Avocado', 'Blueberries', 'Durian', 'Lychee'];

//3
console.log(listA.indexOf('Durian') !=-1 ? ('Yes we have') : ('No we dont have any'));
//4
delete listB[3];
//5
listA.splice(3,0,'Kiwi')

//6
console.log(listA > listB ? ('A is bigger') : ('B is bigger'));
//7 &8
console.log(listA);

console.log(`The index of Avocado : '${listA.indexOf('Avocado')} `); //????????????
console.log(`The index of Pummelo: ${listB.indexOf('Pummelo')}`);

listB.push('Passion','Pummelo')
console.log(listA[2]);
