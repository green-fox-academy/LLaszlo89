/* 1. store the element that says 'The King' in the 'king' variable.
console.log it.
2. store 'The Businessman' and 'The Lamplighter'
in the 'businessLamp' variable.
console.log each of them.
3. store 'The King' and 'The Conceited Man'
in the 'conceitedKing' variable.
alert them one by one.
4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
in the 'noBusiness' variable.
console.log each of them. */
"use strict";

const king = document.querySelector(".asteroid");
//console.log(king);
const businessLamp = document.querySelectorAll(".big");
//console.log(businessLamp[0].innerText);

const conceitedKing = document.querySelectorAll(".container div");
//console.log(conceitedKing)

for (let i = 0; i < conceitedKing.length; i++) {
  // alert(conceitedKing[i].textContent)
}

let noBusiness = document.querySelectorAll(".container div");
for (let i = 0; i < conceitedKing.length; i++) {
  console.log(noBusiness[i].textContent);
}
