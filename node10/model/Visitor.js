const mysql = require('mysql');

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'test',
    password: 'qwer1234',
    database: 'test'
});

exports.get_visitor = (cb) => {
    let sql = 'select * from visitor';
    cnn.query(sql, (err, rows) => {
        if(err) throw err;

        console.log('visitors : ', rows);
        cb(rows);
    });
}

exports.register_visitor = (info, cb) => {
    let sql = `insert into visitor (name, comment) values ('${info.name}', '${info.comment}')`;
    cnn.query(sql, (err, result) => {
        if (err) throw err;

        console.log('insert result: ', result);
        console.log('insert result: ', result.insertId);
        cb(result.insertId);
    });
}

exports.delete_visitor = (id, cb) => {
    // id의 경우에는 숫자라서 '' 문자열 처리를 안해도 된다.
    let sql = `delete from visitor where id = ${id}`;
    cnn.query(sql, (err, result) => {
        if (err) throw err;
        
        console.log('delete result: ', result);
        cb();
    });
}

exports.get_visitor_by_id_model = (id, cb) => {
    let sql = `select * from visitor where id = ${id}`;
    cnn.query(sql, (err, rows) => {
        if (err) throw err;

        console.log('select by id: ', rows);
        cb(rows[0]);
    });
}

exports.update_visitor = (info, cb) => {
    let sql = `update visitor set name='${info.name}', comment='${info.comment}' where id=${info.id}`;
    cnn.query(sql, (err, result) => {
        if (err) throw err;

        console.log('update result: ', result);
        cb();
    });
}
