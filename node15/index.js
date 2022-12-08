const express = require('express');
const cookieParser = require('cookie-parser');
const port = 8080;
const app = express();

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 쿠키 미들웨어 등록
app.use(cookieParser());


const cookieOption = {
    httpOnly: true,
    maxAge: 30000,
}

app.get('/', (req, res) => {
     if(req.cookies.popup == '1') {
        console.log('쿠키 있고, 팝업 금지');
        res.render('index', {data: "none"});
    } else if(req.cookies.popup) {
        console.log('쿠키는 있으나, 팝업은 계속 출력');
        res.render('index', {data: "block"});
    } else {
        console.log('쿠키 최초 생성');
        res.cookie('popup', '0', cookieOption);
        res.render('index', {data: "block"});
    }
});

app.post('/popcancel', (req, res) => {
    res.cookie('popup', req.body.display, cookieOption)
    res.send('none');
});

app.listen(port, () => {
    console.log('server open: ', port);
});
