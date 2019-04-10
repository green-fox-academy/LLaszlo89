'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function box( startx, starty  ){

    ctx.fillStyle = "purple";
    ctx.fillRect(startx, starty, 40, 40);
  
}

for (let i=0; i<=200; i= i+40){
 box(60+i,80+i)   
    
}