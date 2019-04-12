    
'use strict';

var chessBoard = function(size){
  var elementBlack = '%'
  var elementWhite = ' '
  for (var i = 0; i < size; i++) 
  {        

      elementBlack += ' '

      for (var j = 0; j < size; j++) 
      {
      if((i +j) % 2 == 0)
      {
      elementBlack  += elementWhite
      }
      else
      {
      elementBlack  += "%"
      }
  };

};

console.log(elementBlack)

}(8);


/*
let borderSize:number=8;
let elementBlack: string= "%";
let elementWhite: string= " ";

for (let i=0; i<=borderSize; i++){
  elementBlack += " "

   for (let j =0; j<=borderSize; j++){
     /*
if ( ( i+ j) % 2 ==0 ){
  console.log(elementBlack);
  
} else {
  console.log(elementWhite);
  
}
  } */


// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// */