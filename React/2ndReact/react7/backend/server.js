const express = require('express');
const cors = require('cors');
const PORT = 4000;
const app = express();

// 어떤 주소에서 요청을 보내도 cors 에러가 발생하지 않는다.
// 보통 다른 주소에 요청을 보내면 보안상의 이유로 막히는 경우가 있는데 이것을 해결해준다.
app.use(cors());

app.get('/', (req, res) => {
  const pororoObjArr = [
    {
      name: '뽀로로',
      age: '5',
      nickName: '사고뭉치',
    },
    {
      name: '루피',
      age: '4',
      nickName: '공주님',
    },
    {
      name: '크롱이',
      age: '5',
      nickName: '장난꾸러기',
    },
  ];

  res.status(200).send(JSON.stringify(pororoObjArr));
});

app.listen(PORT, () => {
  console.log(`백엔드 서버가 ${PORT}번에서 작동 중`);
});
