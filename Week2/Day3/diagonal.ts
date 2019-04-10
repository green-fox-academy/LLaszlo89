    
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');




ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(400, 400);
ctx.stroke();


// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.