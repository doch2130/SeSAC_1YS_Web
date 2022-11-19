const http = require('http');
// const server = http.createServer();
// http 모듈 불러오기, server 객체 생성

const server = http.createServer(function(req, res) {
    // 클라이언트가 접속했을 때 실행되는 함수
    res.write('<h1>Hello</h1>');
    // res.end가 없으면 홈페이지가 무한 로딩되서 end를 작성해야 로딩이 끝남
    res.end('<hr>');
});
// req = request, res = response
// 클라이언트 요청, 클라이언트 응답

// server.on()  이벤트를 등록
// server.listen()  서버를 실행하고 클라이언트를 기다린다.


server.listen(8080, function() {
    console.log('8080번 포트로 실행');
});
// 8080포트로 서버가 정상실행되면 콘솔 로그가 찍힘
// localhost:8080 으로 접속가능


