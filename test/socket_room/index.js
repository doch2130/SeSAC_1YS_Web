const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set("view engine", "ejs");

app.use("/public", express.static(__dirname+"/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  // res.sendFile(__dirname + "/index.html");
  res.render('index');
});


io.on('connection', (socket) => {
  console.log('Socket Connected');

  // 소켓 ID
  console.log('socket.id', socket.id);

  // 현재 소켓 접속 수
  console.log(io.engine.clientsCount);
  // socket.emit('usercount', io.engine.clientsCount);

  // 기본 메시지 보내기 - 해당 socektID에게만 전송
  socket.emit('socket welcome', {msg: 'socket welcome'});

  // 기본 메시지 받아서 처리하기 - 해당 socektID에게 받은 메시지 처리
  socket.on('response', (str) => {
    console.log(str);
  });

  // 연결되어 있는 전체 SocketID에 메시지 전달
  io.emit('io welcome', {msg: 'io welcome'});

  // room 237 방에 참가하기
  socket.join("room 237");
  
  // Set { <socket.id>, "room 237" }
  // Set(2) { 'Krx5QAPMzzSWpsqAAAAC', 'room 237' }
  console.log(socket.rooms); 

  // 동시에 여러방에 참가도 가능!
  socket.join(["room 237", "room 238"]); 

  // 해당 방의 사용자에게 메시지 보내기
  io.to("room 237").emit("a new user has joined the room");

  // 방을 나갈 때
  socket.leave("room 237");
  // 방 나갈 때 해당 방의 모든 사용자에게 메시지 전송
  io.to("room 237").emit(`user ${socket.id} has left the room`);

  // 사용자가 연결 끊었을 때
  socket.on('disconnect', () => {
    console.log('Server Socket disconnected');
  });
});

http.listen(8080, () => {
  console.log('Server port: ', 8080);
});
