const dotenv = require('dotenv');
// npm install dotenv
const path = require('path');

dotenv.config({ path: './.env' });
dotenv.config({ path: path.join(__dirname, './.env')});

console.log(process.env.PORT);


