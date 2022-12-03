const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/static', express.static(__dirname+'/static'));


const router = require('./routes');

app.use('/', router);

app.get('*', (req, res) => {
    res.send('주소를 확인해 주세요.');
});


app.listen(port, () => {
    console.log('server open : ', port);
});
