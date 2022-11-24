const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index3');
});

app.get('/form', function(req, res) {
    console.log(req.query);
    // 방법1
    res.send('이름은 : ' + req.query.name);
    // 방법2
    // res.send({msg: '이름은 : ' + req.query.name});
});

app.post('/form', function(req, res) {
    console.log(req.body);
    // 방법1
    // res.send('post 이름은 : ' + req.body.name);
    // 방법2
    res.send({msg: 'post 이름은 : ' + req.body.name});
});

app.listen(port, () => {
    console.log('server open : ', port);
});
