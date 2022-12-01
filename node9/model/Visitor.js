const mysql = require('mysql');

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'test',
    password: 'qwer1234',
    database: 'test'
});

// cb는 controller의 get_visitor 함수의 매개변수에 해당한다.
exports.get_visitor = (cb) => {
    let sql = 'select * from visitor';
    cnn.query(sql, (err, rows) => {
        if(err) throw err;

        console.log('visitors : ', rows);
        cb(rows);
    });
}

// query문 마지막에 return rows; 이용해서 값을 넘긴 후에 controller에서 렌더링을 해주면 되지 않냐라는 의문이 생길 수 있지만
// query문은 다른 명령문에 비해서 시간이 오래 걸리고 비동기식으로 인해서 원하는 값이 제대로 출력이 되지 않는다.
// 그래서 query 함수에다가 콜백 함수를 이용하여 비동기식이라도 제대로 값이 출력되기 위한 방법이다.
