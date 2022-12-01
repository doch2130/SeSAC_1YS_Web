const Test = require('../model/Test');
// model 폴더 사용을 위해 require 함수 사용

exports.main = (req, res) => {
    res.render('index');
}

exports.loginGet = (req, res) => {
    console.log(req.query);
    let userlist = Test.userSplit();
    console.log('userlist :', userlist);
    
    let userlistFinal;
    let result = 0;

    for (let i = 0; i < userlist.length; i++) {
        userlistFinal = userlist[i].split('//');
        console.log('userlistFinal : ', userlistFinal);

        if(req.query.id == userlistFinal[0] && req.query.pw == userlistFinal[1] ) {
            console.log('일치 정보 확인');
            result = 1;
            break;
        } else {
            console.log('일치 정보 없음');
        }
    }
    
    if(result > 0) {
        console.log('최종 로그인 성공');
        console.log(userlistFinal);
        res.send({msg: '<p style="color: blue;">' + userlistFinal[0] +'님 환영합니다.</p>'});
    } else {
        console.log('최종 로그인 실패');
        res.send({msg: '<p style="color: red;">아이디 또는 비밀번호를 잘못 입력했습니다.</p>'});
    }

}

exports.loginPost = (req, res) => {
    console.log(req.body);
    let userlist = Test.userSplit();
    console.log('userlist :', userlist);

    // 2차원 리스트로 저장하는 방법
    // let test = []; // 리스트 방식
    // for (let j = 0; j < userlist.length; j++) {
    //     test[j] = userlist[j].split('//');
    //     console.log(test[j]);
    // }
    // console.log(test);
    // console.log(test[0][0]);
    
    let userlistFinal;
    let result = 0;

    for (let i = 0; i < userlist.length; i++) {
        userlistFinal = userlist[i].split('//');
        console.log('userlistFinal : ', userlistFinal);

        if(req.body.id == userlistFinal[0] && req.body.pw == userlistFinal[1] ) {
            console.log('일치 정보 확인');
            result = 1;
            break;
        } else {
            console.log('일치 정보 없음');
        }
    }


    if(result > 0) {
        console.log('최종 로그인 성공');
        console.log(userlistFinal);
        res.send({msg: '<p style="color: blue;">' + userlistFinal[2] +'님 환영합니다.</p>'});
    } else {
        console.log('최종 로그인 실패');
        res.send({msg: '<p style="color: red;">아이디 또는 비밀번호를 잘못 입력했습니다.</p>'});
    }
}




// 선생님 방법
// let login_flag = false;
// let name = '';
// for(let i = 0; i < userlist.length; i++) {
//     let user = userlist[i].split('//');
//     if(req.body.id == user[0] && req.body.pw == uesr[1]) {
//         login_flag = true;
//         name = user[2];
//         break;
//     }
// }

// if(login_flag) {
//     res.send({msg: '<p style="color: blue;">' + name +'님 환영합니다.</p>'});
// } else {
//     res.send({msg: '<p style="color: red;">아이디 또는 비밀번호를 잘못 입력했습니다.</p>'});
// }
