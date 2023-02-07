const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index_Ex1.html");
});

io.on('connection', (socket) => {
  console.log('Server Socket Connected');

  socket.on('helloBtn', (str) => {
    console.log(str);
    socket.emit('helloServer', {msg: '안녕하세요!'});
  });

  socket.on('studyBtn', (str) => {
    console.log(str);
    socket.emit('studyServer', {msg: '공부합시다!'});
  });

  socket.on('byeBtn', (str) => {
    console.log(str);
    socket.emit('byeServer', {msg: '안녕히가세요!'});
  });

  // 선생님 답
  let data = {
    hello: '안녕하세요!',
    study: '공부하세요!',
    bye: '안녕히가세요!',
  }
  socket.on('send', (str) => {
    console.log('client', str);
    socket.emit('response', str + " : " + data[str]);
  });

});

http.listen(8000, () => {
  console.log('Server port: ', 8000);
});
