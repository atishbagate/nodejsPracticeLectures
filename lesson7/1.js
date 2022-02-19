var fs = require('fs');

var data = fs.readFileSync('input.txt');
console.log("sync read = ",data.toString());