// 파일 다운로드

const express = require('express');
const path = require('path');
const port = 8080;
const app = express();

app.get('/', (req, res) => {
    res.send('<a href="/download">Download</a>');
});

app.get('/download', (req, res) => {
    res.download(path.join(__dirname, 'uploads/test.csv'), (err) => {
        // console.log(err);
    });
    console.log(__dirname);
    console.log('Your file has been downloaded!')
});

app.listen(port, () => {
    console.log('res is up on port: ' + port);
});
