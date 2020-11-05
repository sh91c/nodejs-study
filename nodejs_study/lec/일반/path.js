const path = require('path');

console.log(path.sep);
console.log(path.delimiter);

const string = __filename;

console.log(path.parse(string));