// Sequelize.define(param1, param2, param3);
// param1 : 모델(테이블) 이름 설정
// param2 : 컬럼 정의
// param3 : 모델 옵션 정의


// create table visitor (
//     id int not null primary key auto_increment,
//     name varchar(10) not null
//     comment mediumtext
// )

// comment에서 allowNull: true가 기본 값이라서 굳이 설정안해도 됨
const Visitor = (Sequelize, DataTypes) => {
    return Sequelize.define(
        'visitor',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            comment: {
                type: DataTypes.TEXT('medium')
            }
        },
        // 모델옵션
        // 시퀄라이즈가 script문을 sql로 변환할 때 복수형으로 바뀌는 특징이 있는데, 이를 막기위한 것이 freezeTableName 속성이다.
        // 예시로 select * from visitor; 문이되어야 하지만 select * from visitors; 식으로 바뀌는 특징이 있어서
        // freezeTableName 속성을 사용하면 이러한 변화를 막을 수 있다.
        {
            tableName: 'visitor',
            freezeTableName: true,
            timestamps: false  // default true  => createAt modifyAt 시간을 저장하는 기능이 있는데, 컬럼이 설정되어 있어야 한다고 함
            // collate, charset: "UTF8"  // 데이터베이스가 기본적으로 utf8 설정으로 되어 있어서 굳이 안해도 된다고 함
        }
    )
}

module.exports = Visitor;
