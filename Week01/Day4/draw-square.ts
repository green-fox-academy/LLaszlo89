    
'use strict';

let lineCount: number = 6;
let element: string = '#';



function repeater (base:string, element:string, repeat: number){

    for (let i: number = 1; i <= repeat; i++)

base += element;

}

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is