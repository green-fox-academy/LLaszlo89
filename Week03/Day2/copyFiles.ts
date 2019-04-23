// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

'use strict'

const fs = require('fs');

let original: string = 'myFile.txt';
let theCopy: string = 'copy.txt';

function copyFile(filenames: string, newFile: string) {
  try {
    fs.writeFileSync(newFile, fs.readFileSync(filenames, 'utf8'))
    return true
  }
  catch {
    return false
  }

}
console.log(copyFile('myFile.txt', 'newFile'));

