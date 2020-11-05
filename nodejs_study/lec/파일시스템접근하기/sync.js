const fs = require('fs');

// readFile'Sync' 로 사용

console.log('S T A R T');
let data = fs.readFileSync('./readme2.txt');
console.log('first', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('second', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('third', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('fourth', data.toString());
console.log('E N D');