const express = require('express');
const fs = require('fs');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.get('/loginPage', (req, res) => {

    let fileName = './views/login.ejs';
    fs.readFile(fileName, 'utf8', async (err, data) => {
        if(err) throw err;

        console.log(data);
        res.send(data);

    });

});


app.listen(port, () => {
    console.log('server open : ', port);
});

