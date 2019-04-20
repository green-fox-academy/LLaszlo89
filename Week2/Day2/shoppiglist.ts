'use strict'

/* We are going to represent a shopping list in a list containing strings.

Create a list with the following items.
Eggs, milk, fish, apples, bread and chicken
Create an application which solves the following problems.
Do we have milk on the list?
Do we have bananas on the list? */

var list: string[] = ['Eggs', 'milk', 'fish', 'apples', 'bread', 'chicken'];
console.log(list);

function listCheck(items?) {
  if (list.indexOf(items) !==-1){
    console.log('We got it ');
    } else {
      console.log('We need it ');
      
    }
  
}
listCheck('banana');
listCheck('milk');

/* let milkRes= '';
for (let i = 0; i < list.length; i++) {


    (list[i] === 'milk' ? ('We got milk') : ('Buy milk'))
}; */