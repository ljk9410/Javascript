let fs = require('fs');


// readFileSync
console.log('A');
let result = fs.readFileSync('sample.txt', 'utf-8');
console.log(result);
console.log('C');



// async readFile
console.log('A');
fs.readFile('sample.txt', 'utf-8', function (err, res) {
    console.log(res);
});
console.log('C');