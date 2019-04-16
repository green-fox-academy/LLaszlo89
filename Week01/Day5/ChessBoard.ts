    
'use strict';


for(let i = 0; i < 8; i++){
  let row = '';
  
  for(let j = 0; j < 8; j++){
    if(j % 2 === 0) {
      row += 'X';
    } else {
      row += ' ';
    }
  }

  if(i%2 === 0){
    row = row.split('').reverse().join('');
  }

  console.log(row);
}
