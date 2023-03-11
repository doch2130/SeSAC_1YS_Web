package sesac.sesac.spring2.dto;

public class UserDTO2 {
    private String id;
    private String pwd;
    private String gender;
    private String birthday;
    private String interest;

    public String getId() {
        return id;
    }

    public void setName(String id) {
        this.id = id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getInterest() {
        return interest;
    }

    public void setInterest(String interest) {
        this.interest = interest;
    }
}
