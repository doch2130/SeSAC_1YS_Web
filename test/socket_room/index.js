const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// 소켓아이디, 닉네임
let list = {}

// 클라이언트 소켓이 연결이 되면 콜백 함수가 실행된다.
// socket: 클라이언트 소켓과 연결이 되고 새로 생성된 소켓이다.
io.on('connection', (socket) => {
  console.log('Server Socket Connected');

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
    io.emit('list', list);
    io.emit('notice', {msg: name + '님이 입장하셨습니다.'});
  });

  // 다른 사용자 나가면 닉네임 + 퇴장 문구 출력
  socket.on('disconnect', () => {
    io.emit('notice', {msg: list[socket.id] + '님이 퇴장하셨습니다.'});
    // 퇴장해도 list가 남아있으므로 삭제하는 작업을 해준다.
    delete list[socket.id];
    io.emit('list', list);
  });

  // 사용자가 보낸 메시지를 서버에서 받는다.
  // 받은 다음에 다시 클라이언트로 뿌려준다.
  socket.on('send', (data) => {
    data['from'] = socket.id;
    data['userName'] = list[socket.id];
    data['isDM'] = false;
    if(data.to === '전체') {
      io.emit('newMSG', data);
    } else {
      data['isDM'] = true;
      // console.log(Object.keys(list));
      console.log(Object.keys(list).find(key => list[key] == data.to));
      const socketID = Object.keys(list).find(key => list[key] == data.to);
      // 받은 상대방한테만 메시지가 출력된다.
      io.to(socketID).emit('newMSG', data);
      // 나한테도 메시지가 출력되게 설정한다.
      socket.emit('newMSG', data);
    }
  });




  // 디버그 신호를 주고받는 네임스페이스
  const debug = io.of('/debug');

  // 네임스페이스의 연결 처리는 제각각이다. 그러므로 연결 콜백을 다시 만들어야 한다.
  debug.on('connection', (socket) => {
    // 룸의 목록 요청시 / 네임스페이스의 룸 목록 반환
    socket.on('getRooms', () => { 
      // 다른 네임스페이스의 객체에도 접근할 수 있다.
      socket.emit('rooms', io.sockets.adapter.rooms);
      console.log('rooms', io.sockets.adapter.rooms);
  });
});

});

http.listen(8080, () => {
  console.log('Server port: ', 8080);
});
