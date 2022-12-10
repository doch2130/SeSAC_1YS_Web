const express = require('express');
const session = require('express-session');
const port = 8080;
const app = express();

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 세션 미들웨어 등록
// 그 외 여러 가지 옵션이 있지만, 자주 사용하는 애들만 사용해봄
app.use(session({
    // 임의의 문자열을 가지고 세션을 암호화를 하겠다.
    secret: '1234',
    // true 일 경우 모든 요청마다 세션에 변화가 없어도 세션을 다시 저장한다. / 대부분 false로 사용한다.
    resave: false,
    // 초기화되지 않은 세션을 저장할지 선택한다. / 대부분 true로 사용한다.
    saveUninitialized: true,
    // 이 밑으로는 생략 가능 (안써도 괜찮음)
    // 세션 ID의 쿠키에 대한 옵션 (일반 쿠키랑은 다름)
    // cookie: {
    //     httpOnly: true,
    //     maxAge: 30000
    // },
    // true이면 https(보안서버)에서만 작동한다.
    // secure: 
}));

app.get('/', (req, res) => {
    console.log(req.session.user);
    if(req.session.user) {
        console.log('로그인 한 상태');
        res.render('index', {isLogin: true});
    } else {
        console.log('로그인 하지 않은 상태');
        res.render('index', {isLogin: false});
    }
});

app.get('/login', (req, res) => {
    res.render('login');
});

// 임시 계정
const user = { id: 'test', pw: '1234'};

app.post('/login', (req, res) => {
    if(req.body.id == user.id && req.body.pw == user.pw) {
        console.log('로그인 성공');
        req.session.user = req.body.id;
        res.send(true);
    } else {
        console.log('로그인 실패');
        res.send(false);
    }
});

app.delete('/logout', (req, res) => {
    req.session.destroy((err) => {
        if(err) throw err;

        console.log('로그아웃 성공');
        res.send(true);
    })
});

app.listen(port, () => {
    console.log('server open: ', port);
});
