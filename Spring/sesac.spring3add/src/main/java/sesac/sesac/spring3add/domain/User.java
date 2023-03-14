package sesac.sesac.spring3add.domain;

//import lombok.Getter;
//import lombok.Setter;

//@Getter
//@Setter
public class User {
    private String id;
    private String name;
    private String nickname;
    private String password;

    public String getId() { return id; }

    public void setId(String id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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
