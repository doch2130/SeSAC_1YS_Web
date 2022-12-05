const mysql = require('mysql');

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'test',
    password: 'qwer1234',
    database: 'test'
});

exports.register_model = (info, cb) => {
    // 아이디 중복 검사
    let sql = `select id from user2 where id = '${info.id}'`;
    cnn.query(sql, (err, result) => {
        if (err) throw err;
        // console.log('중복 검사: ', result[0]);
        if(result[0]) {
            cb('0');
        } else {
            // 중복 아닌 경우 실행
            let sql = `insert into user2 values ('${info.id}', '${info.pw}', '${info.name}')`;
            cnn.query(sql, (err, result) => {
                if (err) throw err;
        
                console.log("회원가입 : ", result);
                cb('1');
            });
        }
    });
}

exports.login_model = (info, cb) => {
    let sql = `select id, pw from user2 where id = '${info.id}' and pw = '${info.pw}'`;
    cnn.query(sql, (err, result) => {
        if (err) throw err;

        console.log("로그인: ", result);
        cb(result[0]);
    });
}

exports.mypage_model = (info, cb) => {
    console.log('mypage_model: ', info);
    let sql = `select * from user2 where id = '${info.id}' and pw = '${info.pw}'`;
    cnn.query(sql, (err, result) => {
        if (err) throw err;

        console.log('mypage model 결과: ', result);
        cb(result[0]);
    });
}

exports.mypage_edit_model = (info, cb) => {
    console.log('mypage_model_Edit: ', info);
    let sql = `update user2 set pw = '${info.pw}', name = '${info.name}' where id = '${info.id}'`;
    cnn.query(sql, (err, result) => {
        if (err) throw err;

        console.log('mypage_model_Edit 결과: ', result);
        cb();
    });
}

exports.mypage_delete_model = (info, cb) => {
    console.log('mypage_model_delete: ', info);
    let sql = `delete from user2 where id = '${info.id}'`;
    cnn.query(sql, (err, result) => {
        if (err) throw err;

        console.log('mypage_model_delete 결과: ', result);
        cb();
    });
}
