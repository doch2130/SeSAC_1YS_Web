package sesac.sesac.spring3.domain;

//import lombok.Getter;
//import lombok.Setter;

//@Getter
//@Setter
public class User {
    private int id;
    private String name;
    private String nickname;

    public int getId() { return id; }

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