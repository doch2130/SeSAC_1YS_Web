const Test = require('../model/Test');
// model 폴더 사용을 위해 require 함수 사용

exports.main = (req, res) => {
    res.render('index');
}

exports.loginGet = (req, res) => {
    console.log(req.query);
    if(req.query.id == 'admin' && req.query.pw == '1234') {
        console.log('로그인 성공');
        res.send({msg: '<p style="color: blue;">로그인 성공</p>'});
    } else {
        console.log('로그인 실패');
        res.send({msg: '<p style="color: red;">로그인 실패</p>'});
    }
}

exports.loginPost = (req, res) => {
    console.log(req.body);
    if(req.body.id == 'admin' && req.body.pw == '1234') {
        console.log('로그인 성공');
        res.send({msg: '<p style="color: blue;">로그인 성공</p>'});
    } else {
        console.log('로그인 실패');
        res.send({msg: '<p style="color: red;">로그인 실패</p>'});
    }
}

