const User = (Sequelize, DataTypes) => {
    return Sequelize.define(
        'user2',
        {
            id: {
                type: DataTypes.STRING(15),
                allowNull: false,
                primaryKey: true
            },
            pw: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            name: {
                type: DataTypes.STRING(20)
            }
        },
        // 모델옵션
        // 시퀄라이즈가 script문을 sql로 변환할 때 복수형으로 바뀌는 특징이 있는데, 이를 막기위한 것이 freezeTableName 속성이다.
        // 예시로 select * from visitor; 문이되어야 하지만 select * from visitors; 식으로 바뀌는 특징이 있어서
        // freezeTableName 속성을 사용하면 이러한 변화를 막을 수 있다.
        {
            tableName: 'USER2',
            freezeTableName: true,
            timestamps: false  // default true  => createAt modifyAt 시간을 저장하는 기능이 있는데, 컬럼이 설정되어 있어야 한다고 함
            // collate, charset: "UTF8"  // 데이터베이스가 기본적으로 utf8 설정으로 되어 있어서 굳이 안해도 된다고 함
        }
    )
}

module.exports = User;
