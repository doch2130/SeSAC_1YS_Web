const Visitor = require('../model/Visitor');

exports.visitor = (req, res) => {

    Visitor.get_visitor(function(result) {
        console.log(result);
        res.render('visitor', { data: result});
    });

}

exports.register = (req, res) => {
    Visitor.register_visitor(req.body, function(id) {
        console.log(id);
        res.send(String(id));
    });
}


// function get_visitor() {
//     let sql = 'select * from visitor';
//     cnn.query(sql, (err, rows) => {
//         if(err) throw err;

//         console.log('visitors : ', rows);
//         // cb(rows) 가 아래 함수라고 생각하면 됨
//     });
//     function register_visitor(rows) {
//         console.log(rows);
//         res.render('visitor', { data: rows});
//     }
// }

