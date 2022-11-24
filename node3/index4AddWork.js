const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index4AddWork');
});

app.post('/login', function(req, res) {
    console.log(req.body);
    if(req.body.id == 'admin' && req.body.pw == '1234') {
        console.log('로그인 성공');
        res.send({msg: '<p style="color: blue;">로그인 성공</p>'});
        // res.send('로그인 성공');
    } else {
        console.log('로그인 실패');
        res.send({msg: '<p style="color: red;">로그인 실패</p>'});
        // res.send('로그인 실패');
    }
});


app.get('/login', function(req, res) {
    console.log(req.query);
    if(req.query.id == 'admin' && req.query.pw == '1234') {
        console.log('로그인 성공');
        res.send({msg: '<p style="color: blue;">로그인 성공</p>'});
        // res.send('로그인 성공');
    } else {
        console.log('로그인 실패');
        res.send({msg: '<p style="color: red;">로그인 실패</p>'});
        // res.send('로그인 실패');
    }
});


app.listen(port, () => {
    console.log('server open : ', port);
});
