const Visitor = require('../model/Visitor');

exports.visitor = (req, res) => {

    Visitor.get_visitor(function(result) {
        // console.log(result);
        res.render('visitor', { data: result});
    });

}

exports.register = (req, res) => {
    Visitor.register_visitor(req.body, function(id) {
        // console.log(id);
        res.send(String(id));
    });
}

exports.delete = (req, res) => {
    Visitor.delete_visitor(req.body.id, function() {
        res.send(true);
    });
}

exports.get_visitor_by_id = (req, res) => {
    // id에 해당하는 데이터를 조회
    // 서버 응답 > 조회한 데이터
    Visitor.get_visitor_by_id_model(req.query.id, function(rows) {
        res.send(rows);
    });
}

exports.update_visitor = (req, res) => {
    // req.body 데이터를 mysql에 업데이트 할 수 있도록 해야함
    // 서버 응답
    // Visitor.update_visitor(req.body, function() {
    //     res.send(true);
    // });
    // arrow function으로 작성한 방법, 결과 동일
    Visitor.update_visitor(req.body, () => {
        res.send(true);
    });
}
