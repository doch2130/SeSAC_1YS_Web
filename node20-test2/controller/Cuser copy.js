const { User } = require('../model/indexUser');

exports.main = (req, res) => {
    res.render('index');
}

exports.registerUserPage = (req, res) => {
    res.render('register');
}

exports.loginPage = (req, res) => {
    res.render('login');
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





app.post('/login', (req, res) => {
    if(req.body.id == user.id && req.body.pw == user.pw) {
        req.session.user = req.body.id;
        res.send('로그인 성공');
    } else {
        res.send('로그인 실패');
    }
});

// 예시2
app.get('/', (req, res) => {
    if(req.session.user) {
        console.log('로그인 한 상태');
        res.render('index', {isLogin: true});
    } else {
        res.render('index', {isLogin: false});
    }
});

app.delete('/logout', (req, res) => {
    req.session.destroy(function(err) {
        if(err) throw err;
        
        res.send('로그아웃 성공');
    });
});