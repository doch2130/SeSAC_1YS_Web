const mysql = require('mysql');

// DB에 연결하는 함수
// const cnn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'admin',
//     database: 'test'
// });

// 새로운 user로 실행
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'test',
    password: 'qwer1234',
    database: 'test'
});

cnn.query("select * from user", (err, result) => {
    // err 변수에는 query문에서 error이 발생하지 않는 이상 undefined 값이 기본 값이다.
    // if (err) console.log(err);
    // error 발생 시 예외처리를 위해 throw err;로 적는다.
    // 예외처리를 나중에 배울 예정
    if (err) throw err;

    console.log(result);
});

// cnn.query("insert into user values ('kiriko', '79qwsd2', '키리코', 'F', '2022-11-01', 26)", (err, result) => {
//     if (err) throw err;

//     console.log(result);
// });

// sqlMessage: 'Client does not support authentication protocol requested by server; consider upgrading MySQL client',
// mySQL에서는 root 계정으로 접근하는 것을 막아놨기 때문에 다른 계정을 사용해야한다.

// cmd 또는 workbanch에서 아래 명령어를 실행하여 사용자 추가한다.
// # mysql 사용자 추가하기
// CREATE USER 'user'@'%' IDENTIFIED BY '비밀번호';
// # DB 권한 부여 (모든 DB에 접근 가능하도록)
// GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
// # 현재 사용중인 MySQL의 캐시를 지우고 새로운 설정을 적용하기 위해 사용
// FLUSH PRIVILEGES;
// select host, user, plugin, authentication_string from mysql.user;
// # mysql 계정 비밀번호를 바꾸고 싶을 때
// ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '비밀번호';
