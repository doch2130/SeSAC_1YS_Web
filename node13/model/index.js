const Sequelize = require('sequelize');
const config = require('../config/config.json')['development'];
// config.json 파일을 접근해서 development만 불러오겠다.
// 기존에는 model 상단에 데이터베이스를 정의해서 사용했지만, model 파일이 2개 이상이 되는 경우에 문제가 생긴다.
// 파일마다 상단에 데이터베이스를 정의해서 사용해야하는 번거로움이 있고, 정보가 변경되면 전부 수정해야 하는 일이 생겨 따로 저장해서 사용한다.

const db = {};

// db connection 하는 방식 - db정보, db username, db password, config => 기본 양식
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// 아래와 같은 과정이라고 보면 됨
// db = {
//     "Sequelize": Sequelize,
//     "sequelize": sequelize
// }

// 이 상태면 함수를 불러오는 과정만 한거라고 보면 된다.
// db.Visitor = require("./Visitor");
// 뒤에 ()를 추가하면 함수를 불러와서 실행하는 과정까지 진행한다.
db.Visitor = require("./Visitor")(sequelize, Sequelize);

// 최종
// db = {
//     "Sequelize": Sequelize,
//     "sequelize": sequelize,
//     "Visitor": "Visitor.js에서 return 받은 값"
// }

module.exports = db;
