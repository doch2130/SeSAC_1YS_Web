const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');

// body-parser 라이브러리 - 2줄 코드 - 추가 설치 X
app.use(express.urlencoded({ extended: true}));
// x-www-urlencoded 데이터를 해석한다.
// express.urlencoded() 함수가 없으면 post 데이터를 전달하는 값을 받지 못한다.
app.use(express.json());
// 데이터를 json 형식으로 사용한다.

app.get('/form', (req, res) => {
    res.render('form');
});

app.get('/getForm', (req, res) => {
    // get으로 요청을 하면 query로 받기 때문에 req.query 함수를 사용한다.
    console.log(req.query);
    res.send('get 요청 성공');
});

app.post('/postForm', (req, res) => {
    // post로 요청을 하면 body로 데이터를 받기 때문에 req.body 함수를 사용한다.
    console.log(req.body);
    // res.send('post 요청 성공');
    res.render('result', {data: req.body});
});



app.listen(port, () => {
    console.log('Server Open : ', port);
});




