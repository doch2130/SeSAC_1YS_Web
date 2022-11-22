const express = require('express');
const app = express();
const port = 8080;

// ejs 템플릿 설정
// views 폴더가 기본 디렉터리로 설정된다.
app.set('view engine', 'ejs');

// localhost:8080/ejs 접속
app.get('/ejs', (req, res) => {
    // 엔진을 ejs로 설정했기 때문에 파일 이름만 작성한다.
    res.render('index');
});

app.get('/ejs2', (req, res) => {
    // 엔진을 ejs로 설정했기 때문에 파일 이름만 작성한다.
    res.render('index2', {
        title: 'index 페이지 입니다.',
        data: ['a', 'b', 'c']
    });
});

// app.get (http://localhost:8080 를 제외한 경로를 입력해주면 됨, 함수(req,res)를 작성하면 되며 함수에는 매개변수가 필수로 작성되어야 한다.) 
app.get('/', (req, res) => {
    res.send('Hello Express');
});


// index.hmtl 파일을 불러올 수 있는데 이때 경로를 무조건 절대 경로로 작성해야 한다.
// 경로를 일일이 적을 수는 없기에 __dirname 함수를 이용해서 경로를 작성한다.
// BackEnd 파일(서버 관련)이 아닌 index.html 파일같이 FrontEnd 파일을 수정하는 경우에는 서버 재가동을 안해도 반영된다.
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// <img src="../static2/img/img01.png" alt="img01" style="width: 200px; height: 200px;"></img>
// html 파일에서 img 파일 경로 접근 시도하였지만, 파일을 찾을 수 없는 Error Msg가 출력 됨
// app.use() 함수를 이용하여 경로를 등록해야 서버에서 해당 폴더로 접근할 수 있는 권한이 생긴다. /  미들웨어를 등록하는 함수이다.
// app.use('/public', b) => /public => 가상경로
// express.static('static') => static 함수를 사용해서 실제 존재하는 static 폴더를 접근한다.
app.use('/public', express.static('static'));

// <img src="/public/img/img01.png"
// img가 public 가상경로로 접근을 하면 static 폴더와 매칭이 되어 연결시켜준다.
// => public 가상경로를 등록, static 실제 폴더와 매칭
// img src 작성 시 => /static/img/img01.png => /public/img/img01.png 로 작성하면 정상 출력 됨

// 동일 폴더에 2개 이상의 가상 경로 설정 가능


// 가상 경로랑 폴더 이름이랑 같아도 문제는 없다.
app.use('/static', express.static('static'));


// *****
// app.use(express.static('static'));
// src = '/img/img01.png'
// => 가상 경로를 작성안하고 사용하면 바로 접근할 수 있다.


// app.listen(port, function() {
//     console.log('서버 실행');
// });
app.listen(port, () => {
    console.log('서버 실행 : ', port);
});

