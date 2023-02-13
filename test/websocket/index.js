const express = require('express');
const app = ewspress();

app.use('/', (req, res) => {
  res.sendfile(__dirname + '/index.html');
});

app.listen(8080);

const Websocket = require('ws');

const socket = new Websocket.Server({
  port: 8081
});

