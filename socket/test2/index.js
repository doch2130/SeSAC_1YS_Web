const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index');
});

io.on('connection', (socket) => {
  console.log('server socket connect');

  socket.on('newUser', (data) => {
    socket.name = data;
    console.log('name', socket.name);

    const message = data + '님이 접속했습니다';
    io.emit('updateMessage', {
      name: 'SERVER',
      message: message
    })
  })

  // io.sockets 나를 포함한 전체 소켓
  // socket.broadcast 나를 제외한 전체 소켓

  socket.on('disconnect', () => {
    const message = socket.name + '님이 퇴장했습니다';
    socket.broadcast.emit('updateMessage', {
        name : 'SERVER',
        message : message
    });
  });


  socket.on('sendMessage', (data) => {
    console.log(data);
    data.name = socket.name;
    io.sockets.emit('updateMessage', data);
  });



})

http.listen(8080, () => {
  console.log('Server Open 8080');
});


