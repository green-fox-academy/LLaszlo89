'use strict'

let nameToGreet: string = 'GreenFox';

function greet(input?:string){
 input === undefined ? console.log(nameToGreet) : console.log('Greetings, dear ' + input);

}
greet();


// -  Create variable named `nameToGreet` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `nameToGreet`