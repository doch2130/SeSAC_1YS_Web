const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index2');
});

app.get('/form', (req, res) => {
    console.log(req.query);
    res.send(req.query);
});

app.listen(port, function() {
    console.log('server open : ', port);
});
