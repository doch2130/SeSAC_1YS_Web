package sesac.sesac.spring3add.mapper;

import org.apache.ibatis.annotations.*;
import sesac.sesac.spring3add.domain.User;

import java.util.List;

@Mapper
public interface MainMapper {
    // mapper 참고하기
    // retrieveAll = mysql selectALL 같은 기능
    // nameSpace에 연결되어 있는 xml 파일의 내용을 실행한다.
    // MainMapper.xml 파일의 id와 함수(retrieveAll) 이름이 같은 것을 실행한다.
    // <select id="retrieveAll" resultType="sesac.sesac.spring3.domain.User">
    // 마지막에 domain.User라고 작성이 되어 있기 때문에, List<User>로 작성하면 된다.
    List<User> retrieveAll();

    // mapper 참고 안하기
    @Insert("insert into user(name, nickname) values(#{name}, #{nickname})")
    void insertUser(User user);
    // insertUser 함수를 실행할 때 위의 Insert 문을 실행한다.
    // 전달받은 user 객체에서 name, nickname 값을 꺼내서
    // insert문의 #{name}, #{nickname} 에 각각 맵핑해서 사용한다.

    @Insert("insert into user(id, name, nickname, password) values (#{id}, #{name}, #{nickname}, #{password})")
    void registerUser(User user);

    // xml 방식으로 해봄
    // @Select("select * from user where id=#{id} and password=#{password}")
    List<User> loginUser(User user);

    // xml 방식으로 해봄
    // @Select("select * from user where id=#{id}")
    List<User> getUserInfo(String id);

    @Delete("delete from user where id=#{id}")
    void deleteUser(String id);

    @Update("update user set name=#{name}, nickname=#{nickname}, password=#{password}")
    void updateUser(User user);
}
