// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"


  'use-strict';

const fs = require('fs');

try {
  let fileContent = fs.readFileSync('my-file.txt', 'utf-8');
  console.log(fileContent);
}
catch(err){
  console.log('Unable to read file: '+ err.path);
}
