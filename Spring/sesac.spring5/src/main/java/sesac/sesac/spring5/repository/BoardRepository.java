package sesac.sesac.spring5.repository;

import org.apache.ibatis.annotations.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import sesac.sesac.spring5.domain.BoardEntity;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
public interface BoardRepository extends JpaRepository<BoardEntity, Integer> {
    Optional<BoardEntity> findById(int id);
    Optional<BoardEntity> deleteById(int id);

    @Transactional
    @Modifying
    // @Query("update board b set b.title = :title, b.content = :content where b.id = :id")
    @Query("update BoardEntity b set b.title = :title, b.content = :content where b.id = :id")
    int updateBoard(@Param("id") int id, @Param("title") String title, @Param("content") String content);
}
