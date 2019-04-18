'use strict'

// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals = ["koal", "pand", "zebr"];


let plusA = animals.map(
  function(e:any){
    return (e + 'a');
  });
  console.log(plusA);
  


