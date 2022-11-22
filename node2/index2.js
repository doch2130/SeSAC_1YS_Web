const express = require('express');
const app = express();
const port = 8080;


app.set('view engine', 'ejs');

app.get('/ejs3', (req, res) => {
    res.render('index3');
});

app.use('/static', express.static('static'));

app.listen(port, () => {
    console.log('server open : ', port);
});
