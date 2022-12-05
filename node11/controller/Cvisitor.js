const Visitor = require('../model/Visitor');

exports.main = (req, res) => {
    res.render('index');
}

exports.loginPage = (req, res) => {
    res.render('login');
}

exports.registerPage = (req, res) => {
    res.render('register');
}

exports.register = (req, res) => {
    Visitor.register_model(req.body, (result) => {
        // ID 중복이면 0, 성공이면 1 반환
        res.send(result);
    });
}

exports.login = (req, res) => {
    Visitor.login_model(req.body, (result) => {
        console.log('result2:', result);
        res.send(result);
    });
}

exports.mypage = (req, res) => {
    console.log('mypage: ', req.body);
        Visitor.mypage_model(req.body, (result) => {
            if(result) {
                res.render('mypage', {data: result});
            } else {
                res.send(false);
            }
        });
}


exports.mypage_edit = (req, res) => {
    console.log('mypage_edit: ', req.body);
    Visitor.mypage_edit_model(req.body, () => {
        res.send(true);
    });
}

exports.mypage_delete = (req, res) => {
    console.log('mypage_delete: ', req.body);
    Visitor.mypage_delete_model(req.body, () => {
        res.send(true);
    });
}
