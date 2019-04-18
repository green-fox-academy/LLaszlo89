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
  





/* function appendAFunc(animals?): string {
return   animals.map() + "a";
}
console.log(appendAFunc(animals)); */

/* console.log(['apple', 'pear', 'melon'].indexOf('pear')); // 1

['apple', 'pear', 'melon'].forEach(function(e, i) {
  console.log(e, i);
});
 */