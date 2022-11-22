const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/form', (req, res) => {
    res.render('form2');
});

app.get('/getresult', (req, res) => {
    res.render('result2', {data: req.query});
    console.log(req.query);
});

app.get('/form2', (req, res) => {
    res.render('form3');
});

app.post('/postresult', (req, res) => {
    res.render('result3', {data : req.body});
    console.log(req.body);
});


app.listen(port, () => {
    console.log('server open : ', port);
});
