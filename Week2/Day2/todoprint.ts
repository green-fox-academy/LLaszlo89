'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todo: string = 'My todo:\n '
let todoText: string = '- Buy milk\n';
let todoTexta: string = ' - Download gamesn\n';
let todoTextb: string = '\t- Diablo\n';
console.log(todo + todoText + todoTexta + todoTextb );