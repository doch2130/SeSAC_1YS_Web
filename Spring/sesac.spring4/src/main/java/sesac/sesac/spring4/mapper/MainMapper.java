package sesac.sesac.spring4.mapper;

import org.apache.ibatis.annotations.*;
import sesac.sesac.spring4.domain.User;

import java.util.List;

@Mapper
public interface MainMapper {
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
