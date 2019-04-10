'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.strokeStyle= " Red";
ctx.moveTo(400, 200);
ctx.lineTo(0, 200);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle= " Green";
ctx.moveTo(200, 0);
ctx.lineTo(200, 400);
ctx.stroke();
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.

