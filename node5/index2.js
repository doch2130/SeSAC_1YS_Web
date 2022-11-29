const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 8000;

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'test',
    password: 'qwer1234',
    database: 'test'
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    cnn.query('select * from user', (err, result) => {
        if (err) throw err;

        console.log(result);
        res.render('index2', {rows: result});
    });
});


app.listen(port, () => {
    console.log('server open : ', port);
});
