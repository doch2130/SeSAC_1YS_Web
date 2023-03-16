package sesac.sesac.spring5.domain;

import javax.persistence.*;

@Entity
@Table(name="board")
public class BoardEntity {

    @Id
    @GeneratedValue
    private int id;

    @Column(length=50, nullable = false)
    private String title;

    @Column(length=100, nullable = false)
    private String content;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
