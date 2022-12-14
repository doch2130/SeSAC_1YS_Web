const express = require("express");
const session = require('express-session');
const app = express();
const port = 8080;

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

const router = require("./routes");
app.use('/', router);


app.get('*', (req, res)=>{
    res.send("주소가 존재하지 않습니다. 다시 한 번 확인해주세요.");
});

app.listen(port, ()=>{
    console.log("server open: ", port);
});
