package sesac.sesac.spring4.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sesac.sesac.spring4.domain.User2Entity;
import sesac.sesac.spring4.domain.UserEntity;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User2Entity, Integer> {
    Optional<User2Entity> findByName(String name);
    // UserEntity userEntity 이 방식을 아래와 같이 사용하면,
    // Optional<UserEntity> user;
    // 데이터를 가져올 때 user.get(); 으로 가져오면 된다.

    // findByName => select * from user where name = #{name}
    // By 뒤에 컬럼 이름에 따라서 검색을 진행한다.
    // Optional<User2Entity> findById(int id);
    // findById => select * from user where id = #{id}

    // Optional<User2Entity> findByIdName(int id, String name);
    // select * from user where id=#{id} and name=#{name}

    // boolean existsByName(String name);
    // 요청한 name 데이터를 검사 후 true, false 로 값을 반환해준다.

}