const Test = require('../model/Test');
// model 폴더 사용을 위해 require 함수 사용

exports.main = (req, res) => {
    // res.send('hello');
    // send 말고 render 이용해서 views 폴더의 index.ejs 파일도 호출 가능
    // res.render('index');

    let hi = Test.hello();
    // hi 변수에 hello 함수의 return 값 helloTest 문자가 저장됨
    res.send(hi);
}

exports.test = (req, res) => {
    res.send('test');
}

exports.post = (req, res) => {
    res.send('post');
}