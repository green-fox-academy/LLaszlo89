    
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.strokeStyle="red";
ctx.moveTo(50, 50);
ctx.lineTo(300, 50);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="blue";
ctx.moveTo(50, 50);
ctx.lineTo(50, 350);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.moveTo(50, 350);
ctx.lineTo(300, 350);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.moveTo(300, 50);
ctx.lineTo(300, 350);
ctx.stroke();

//ctx.strokeRect(50, 50, 300, 300);

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.
