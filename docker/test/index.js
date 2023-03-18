const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(req.query.name);
});

app.get('/test', (req, res) => {
  res.send(req.query.id);
});

app.listen(8000, () => {
  console.log("Server is open, port : 8000");
});
