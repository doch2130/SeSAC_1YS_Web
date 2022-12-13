const dotenv = require('dotenv');
// npm install dotenv
const path = require('path');

dotenv.config({ path: './.env' });
dotenv.config({ path: path.join(__dirname, './.env')});

console.log(process.env.PORT);



let a = ('\n총건수\n152,940').slice(5);
// console.log(a.length);
// console.log(a[4]);
console.log(a);

