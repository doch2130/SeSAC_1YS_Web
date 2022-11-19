const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(function(req, res) {
    fs.readFile('./test.html')
    .then(function(data) {
        res.writeHead(200);
        res.end(data.toString());
    });
});


server.listen(8080, function() {
    console.log('8080 port open');
});
