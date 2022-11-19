const http = require('http');
const fs = require('fs').promises;


const server = http.createServer(function(req, res) {
    fs.readFile('./test2.html')
    .then(function(data) {
        res.end(data.toString());
    });
});


server.listen(8080, function() {
    console.log('8080 서버 실행');
});
