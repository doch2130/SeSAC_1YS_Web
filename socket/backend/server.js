const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + "/chatting.html");
// });

app.get('*', (req, res) => {
  res.status(404).send('not found');
});

// 소켓아이디, 닉네임
let list = {}

// 클라이언트 소켓이 연결이 되면 콜백 함수가 실행된다.
// socket: 클라이언트 소켓과 연결이 되고 새로 생성된 소켓이다.
io.on('connection', (socket) => {
  console.log('Server Socket Connected', socket.id);

  // 사용자 구분을 위해 클라이언트에게 socket.id 전달해주기
  socket.emit('info', socket.id);

  socket.emit('welcome', {msg: 'welcome'});

  socket.on('response', (str) => {
    console.log(str);
  });

  socket.on('disconnect', () => {
    console.log('Server Socket disconnected');
  });


  // 브로드캐스트로 서버에 접속된 모든 사용자에게 메시지를 전송한다.
  // io.emit('notice', {msg: '익명님이 입장하셨습니다'});

  // 사용자가 닉네임을 입력하고 들어오면 userName을 socketID와 mapping 시켜준다.
  // 여기서는 json으로 저장
  socket.on('userName', (name) => {
    list[socket.id] = name;
    io.emit('notice', {msg: name + '님이 입장하셨습니다.'});
  });

  // 다른 사용자 나가면 닉네임 + 퇴장 문구 출력
  socket.on('disconnect', () => {
    io.emit('notice', {msg: list[socket.id] + '님이 퇴장하셨습니다.'});
  });

  // 사용자가 보낸 메시지를 서버에서 받는다.
  // 받은 다음에 다시 클라이언트로 뿌려준다.
  socket.on('send', (data) => {
    data['from'] = socket.id;
    io.emit('newMSG', data);
  });

});

http.listen(3001, () => {
  console.log('Server port: ', 3001);
});
