// const Visitor = require("../model/Visitor");
// const { Visitor } = require('../model/index');
// index 파일이라서 model 까지만 접근한다.
// db = {
//     "Sequelize": Sequelize,
//     "sequelize": sequelize,
//     "Visitor": "Visitor.js에서 return 받은 값"
// }
// 여기서 Visitor을 가져온다.
const { Visitor } = require('../model');

exports.visitor = async (req, res) => {
    // async와 await 문법을 이용하는 방법
    // 만약 findAll에서 오래 걸리지 않았더라면 이러한 방식으로 사용할 수 있지만, 그렇지가 않다.
    // 이 상태로 실행하면 result에 결과가 담겨지기 전에 render 실행될 수 있는 상황이 있다.
    // let result = Visitor.findAll();
    // res.render('visitor', {data: result});

    // 그래서 async, await를 이용하는 방식으로 사용한다.
    // await는 뒤에 promise 객체가 종료될 때까지 기다린다.
    // promise 객체의 then 보다 가독성이 더 좋다. 그러나 async await를 사용하는 경우에는 then을 사용하면 안된다.
    // result에 결과가 저장되면 다음 함수를 실행한다.
    let result = await Visitor.findAll();
    res.render('visitor', {data: result});


    // // findAll() 함수는 시퀄라이즈 내장 함수이며, promise 이다.
    // Visitor.findAll()
    // .then((result) => {
    //     console.log(result);
    //     // result에서 첫번째 값의 id를 가져오고 싶을 때 다음 명령어로 확인을 하는데
    //     // 기본값으로 dataValues를 가져오기 때문에 생략하고 사용해도 된다.
    //     // console.log(result[0].dataValues.id);
    //     // console.log(result[0].id);
    //     res.render('visitor', {data: result});
    // });

    // Visitor.get_visitor(function(result){
    //     console.log(result);
    //     res.render("visitor", {data: result});
    // })
}

// Register async + await 문법
exports.register = async (req, res) => {
    let data = {
        name: req.body.name,
        comment: req.body.comment
    }
    let result = await Visitor.create(data);
    res.send(String(result.id));
}

// Register 기존에 사용하던 문법
// exports.register = (req, res) => {
//     // insert 문을 할 때는 create() 함수를 사용하면 된다.
//     let data = {
//         name: req.body.name,
//         comment: req.body.comment
//     }
//     Visitor.create(data)
//     .then((result) => {
//         console.log(result);
//         res.send(String(result.id));
//     });

//     // `insert into visitor(name, comment) values('${req.body.name}', '${req.body.comment}')`;
//     // Visitor.register_visitor( req.body, function(id){
//     //     console.log(id);
//     //     res.send(String(id));
//     // })
// }



// Delete async + await 문법
exports.delete = async (req, res) => {
    let result = await Visitor.destroy({
        where: {
            id: req.body.id
        }
    });
    console.log(result);
    res.send(String(result));
}

// Delete 기존에 사용하던 문법
// exports.delete = (req, res) => {
//     // 삭제할 때는 destroy() 함수를 사용한다.
//     Visitor.destroy({
//         where: {
//             id: req.body.id
//         }
//     })
//     .then((result) => {
//         console.log(result);
//         res.send(result);
//     });

//     // `delete from fisitor where id = '${req.body.id}'`;
//     // mysql req.body.id에 해당하는 데이터를 delete
//     // 서버 응답 res.send 
//     // Visitor.delete_visitor(req.body.id, function(){
//     //     res.send(true);
//     // })
// }



// async + await 문법
exports.get_visitor_by_id = async (req, res) => {
    let result = await Visitor.findOne({
        where: {
            id: req.query.id
        }
    });
    res.send(result);
}

// 기존 promise + then 문법
// exports.get_visitor_by_id = (req, res) => {
//     // req.query.id 에 해당하는 데이터를 조회
//     // 서버 응답 > 조회한 데이터
//     // findOne() 함수는 1개만 찾는 함수
//     // findAll() 함수에서도 동일하게 사용가능, 차이는 findOne() 함수에는 limit 1 설정이 있다고 보면 된다.
//     Visitor.findOne({
//         where: {
//             id: req.query.id
//         }
//     })
//     .then((result) => {
//         res.send(result);
//     });

//     // select * from visitor where id = req.query.id;
//     // Visitor.get_visitor_by_id_model(req.query.id, function(rows){
//     //     res.send(rows);
//     // });
// }



// Update async + await 문법
exports.update_visitor = async (req, res) => {
    let data = {
        name: req.body.name,
        comment: req.body.comment
    }
    let result = await Visitor.update(data, {
        where: {
            id: req.body.id
        }
    });
    res.send(result);
}

// Update 기존에 사용하던 문법
// exports.update_visitor = (req, res) => {
//     // update() 함수는 정보를 변경할 때 사용한다.
//     let data = {
//         name: req.body.name,
//         comment: req.body.comment
//     }
//     Visitor.update(data, {
//         where: {
//             id: req.body.id
//         }
//     })
//     .then((result) => {
//         console.log(result);
//         res.send(result);
//     });

//     // `update visitor set name = '${req.body.name}, comment = '${req.body.comment}'`;
//     // req.body 데이터를 mysql 에 update 할 수 있도록
//     // 서버의 응답 
//     // Visitor.update_visitor(req.body, function(){
//     //     res.send(true);
//     // });
// }