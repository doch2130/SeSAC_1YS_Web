package sesac.sesac.spring3.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import sesac.sesac.spring3.domain.User;

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
}
