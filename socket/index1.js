const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index0.html');
});

// app.get('/1st', (req, res) => {
//   res.sendFile(__dirname + '/index1.html');
// });

// app.get('/2nd', (req, res) => {
//   res.sendFile(__dirname + '/index2.html');
// });


// 소켓 아이디 + 이름 임시 저장
const list = [];
const manager = [];
const roomList = [];

// NameSpace 동일 + Room 나누기
io.on('connect', (socket) => {
  // console.log('list', list);
  // console.log('기본 네임스페이스 접속');

  // 사용자 이름 받기 - 나중에는 ID로 받을 예정
  socket.on('userName', (data) => {
    // console.log('userName', data);
    // const socketId = socket.id;
    
    const userData = {
      'userName': data,
      'socketId': socket.id,
    };

    if(data === '관리자') {
      manager.push(userData);
      // manager[socketId] = data;
    } else {
      list.push(userData);
      // list[socketId] = data;
    }
    // console.log('list', list);
    // console.log('manager', manager);

    if(roomList.length === 0) {
      const temp = {
        roomNum: 'room0',
        clientSocketId: socket.id,
        userId: data,
      }
      roomList.push(temp);
    } else {
      // const temp = 'room'+roomList.length;
      // console.log('temp', temp);
      const temp = {
        roomNum: 'room' + roomList.length,
        clientSocketId: socket.id,
        userId: data,
      }
      // const temp = 'room' + roomList.length;
      roomList.push(temp)
    }
    console.log(roomList);
    socket.join('room' + roomList.length);
    // console.log('socket.adapter.rooms', socket.adapter.rooms);
  });

  // 사용자 구분을 위해 클라이언트에게 socket.id 전달해주기
  socket.emit('info', socket.id);

  // console.log(socket.id);
  

  // const roomId = socket.id;
  // console.log('roomId', roomId);
  // socket.join(roomId);

  // socket.to(roomId).emit('welcome', {msg: roomId + '방에 오신것을 환영합니다.'});
  // io.to(roomId).emit('welcome', {msg: roomId + '방에 오신것을 환영합니다.'});

  // console.log('socket.adapter.rooms', socket.adapter.rooms);

  socket.on('disconnect', () => {
    // console.log('기본 네임스페이스 접속 해제');
    // socket.leave(roomId);
    // delete list[roomId];
  });
});


// // 네임스페이스 구분

// // 네임스페이스 등록
// const room = io.of('/room');
// const chat = io.of('/chat');

// // room 네임스페이스 전용 이벤트
// room.on('connection', (socket) => {
//   console.log('room 네임스페이스에 접속');
  
//   socket.on('disconnect', () => {
//      console.log('room 네임스페이스 접속 해제');
//   });
  
//   socket.emit('newRoom', '방 만들어'); // 같은 room 네임스페이스 소켓으로만 이벤트가 날라간다.
// });

// // chat 네임스페이스 전용 이벤트
// chat.on('connection', (socket) => {
//   console.log('chat 네임스페이스에 접속');

//   socket.on('disconnect', () => {
//      console.log('chat 네임스페이스 접속 해제');
//     //  socket.leave(roomId);
//   });
  
//   socket.emit('join', '참여') // 같은 chat 네임스페이스 소켓으로만 이벤트가 날라간다.
// });

http.listen(8080, () => {
    console.log('Connected at 8080');
});
