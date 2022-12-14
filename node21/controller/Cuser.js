const { User } = require('../model/indexUser');

// exports.main = (req, res) => {
//     if(req.session.id) {
//         console.log('로그인 한 상태');
//         res.render('index', {isLogin: true});
//         console.log(req.session.id);
//     } else {
//         res.render('index', {isLogin: false});
//     }
// }

exports.main = (req, res) => {
    console.log(req.session.user);
    res.render('index');
}


exports.loginPage = (req, res) => {
    res.render('login');
}

exports.login = async (req, res) => {
    let result = await User.findOne({
        where: {
            id: req.body.id,
            pw: req.body.pw
        }
    });
    req.session.user = req.body.id;
    console.log('login: ', result);
    console.log('session: ', req.session.user);
    res.send(result);
}


exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if(err) throw err;
        
        res.send('로그아웃 성공');
    });
}







exports.registerUser = async (req, res) => {
    try {
        let data = {
            id: req.body.id,
            pw: req.body.pw,
            name: req.body.name
        }
        let result = await User.create(data);
        res.send('1');
    } catch (err) {
        console.log('err: ',err.parent.code);
        if(err.parent.code == 'ER_DUP_ENTRY') {
            console.log('중복');
            res.send('0');
        } else {
            console.log('그 외');
            res.send('4');
        }
    }
}








exports.mypage = async (req, res) => {
    let result = await User.findOne({
        where: {
            id: req.body.id
        }
    });
    console.log('mypage Login: ', result);
    res.render('mypage', {data: result});
}

exports.mypageEdit = async (req, res) => {
    let data = {
        pw: req.body.pw,
        name: req.body.name
    }
    let result = await User.update(data, {
        where: {
            id: req.body.id
        }
    });
    console.log('mypage Edit: ', result[0]);
    res.send(String(result[0]));
}

exports.mypageDelete = async (req, res) => {
    let result = await User.destroy({
        where: {
            id: req.body.id
        }
    });
    console.log('mypage Delete:', result);
    res.send(String(result));
}
