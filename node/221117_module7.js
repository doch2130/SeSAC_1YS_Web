const os = require('os');
const path = require('path');


console.log('1-1. : ', os.freemem());
console.log('1-2. : ', os.totalmem());
console.log('1-3. : ', os.homedir());

console.log('------------------------------------');

const file = __filename;
// console.log(path.parse(file));

// console.log(path.delimiter(file));

// console.log(process.env.PATH);
// console.log(process.env.PATH.split(path.delimiter));


// console.log(path.parse(file));
console.log('2-1 : ', path.sep);
console.log('2-2 : ', path.extname(file));
console.log('2-3 : ', path.parse(file));
console.log('2-3(2) : ', path.dirname(file).split('\\'));

