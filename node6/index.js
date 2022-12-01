const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/static', express.static(__dirname+'/static'));

// routes 폴더에서 필요한 정보를 가져온다.
// 뒤에 파일 이름을 작성하지 않으면 기본 값으로 index.js 파일을 가져온다.
// const router = require('./routes/index');
const router = require('./routes');

// localhost:8080
// localhost:8080/url주소
// 2개와 같이 입력이 되면 router로 이동을 시키겠다 라는 의미
// 미들웨어 등록을 통해 접속을 하게 되면 무조건 router를 들르게 된다.
app.use('/', router);

// 주소가 아니라 *로 입력이 되어 있는데, 위에서 정의해둔 router가 아닌 다른 주소를
// 입력하였을 경우 error 페이지를 보여주게 설정하는 방법이다.
// ('*')은 무조건 마지막에 작성을 해줘야 다른 주소들이 정상적으로 작동한다.
app.get('*', (req, res) => {
    // res.render('error');
    res.send('주소가 존재하지 않습니다. 다시 한 번 확인해주세요.');
});


app.listen(port, () => {
    console.log('server open : ', port);
});
