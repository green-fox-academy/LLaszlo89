'use strict';

var step: number;
for (step = 1; step <=100; step++){
    if (step % 3 ===0 && step % 5 ===0){
        console.log('FizzBuzz');
        
    }else if ( step % 3 ===0){
        console.log('Fizz');
        
    }else if (step % 5 ===0){
        console.log('Buzz');
    }else {
        console.log(step);
        
    }
    

  
}


// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.