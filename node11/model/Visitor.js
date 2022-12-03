const mysql = require('mysql');

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'test',
    password: 'qwer1234',
    database: 'test'
});

exports.register_model = (info, cb) => {
    let sql = `insert into user2 values ('${info.id}', '${info.pw}', '${info.name}')`;
    cnn.query(sql, (err, result) => {
        if (err) throw err;

        console.log("회원가입 : ", result);
        cb();
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

exports.mypage_model = (id, cb) => {
    console.log('mypage_model: ', id);
    let sql = `select * from user2 where id = '${id}'`;
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



// exports.get_visitor = (cb) => {
//     let sql = 'select * from visitor';
//     cnn.query(sql, (err, rows) => {
//         if(err) throw err;

//         console.log('visitors : ', rows);
//         cb(rows);
//     });
// }

// exports.register_visitor = (info, cb) => {
//     let sql = `insert into visitor (name, comment) values ('${info.name}', '${info.comment}')`;
//     cnn.query(sql, (err, result) => {
//         if (err) throw err;

//         console.log('insert result: ', result);
//         console.log('insert result: ', result.insertId);
//         cb(result.insertId);
//     });
// }

// exports.delete_visitor = (id, cb) => {
//     // id의 경우에는 숫자라서 '' 문자열 처리를 안해도 된다.
//     let sql = `delete from visitor where id = ${id}`;
//     cnn.query(sql, (err, result) => {
//         if (err) throw err;
        
//         console.log('delete result: ', result);
//         cb();
//     });
// }

// exports.get_visitor_by_id_model = (id, cb) => {
//     let sql = `select * from visitor where id = ${id}`;
//     cnn.query(sql, (err, rows) => {
//         if (err) throw err;

//         console.log('select by id: ', rows);
//         cb(rows[0]);
//     });
// }

// exports.update_visitor = (info, cb) => {
//     let sql = `update visitor set name='${info.name}', comment='${info.comment}' where id=${info.id}`;
//     cnn.query(sql, (err, result) => {
//         if (err) throw err;

//         console.log('update result: ', result);
//         cb();
//     });
// }
