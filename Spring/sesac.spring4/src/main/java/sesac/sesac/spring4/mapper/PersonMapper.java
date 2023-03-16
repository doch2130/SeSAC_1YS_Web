package sesac.sesac.spring4.mapper;

import org.apache.ibatis.annotations.*;
import sesac.sesac.spring4.domain.Person;

@Mapper
public interface PersonMapper {
    @Insert("insert into person(id, password, name) values (#{id}, #{password}, #{name})")
    void insertPerson(Person person);

    @Select("select * from person where id=#{id} and password=#{password} limit 1")
    // limit 1을 설정하면, select 의 결과를 List 가 아니라 Person 으로 받을 수 있게 된다.
    Person getPerson(String id, String password);

    @Update("update person set password=#{password}, name=#{name} where id=#{id}")
    void updatePerson(Person person);

    @Delete("delete from person where id=#{id}")
    void deletePerson(String id);
}
