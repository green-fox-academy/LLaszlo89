// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0


function tenDiv(n:number): number {
  
  try{
  if (n ===0){
   throw new Error('Fail');
  }
  return 10 / n ;
}
catch (e){console.log(e.message);


}

  
} console.log(tenDiv(20));