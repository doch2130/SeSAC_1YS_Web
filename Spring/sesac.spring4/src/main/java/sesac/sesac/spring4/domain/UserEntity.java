package sesac.sesac.spring4.domain;

import javax.persistence.*;

@Entity
@Table(name="user2")
public class UserEntity {
    @Id
    @GeneratedValue
    private int id;
    // id primary key auto_increment

    @Column(length=10, nullable=false)
    private String name;
    // name varchar(10) not null

    @Column(length=10, nullable=false)
    private String nickname;
    // nickname varchar(10) not null

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }
}
