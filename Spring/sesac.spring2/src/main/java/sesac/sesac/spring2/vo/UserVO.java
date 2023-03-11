package sesac.sesac.spring2.vo;

public class UserVO {
    private String name;
    private String age;

    public String getName() {
        return name;
    }
    public String getAge() {
        return age;
    }

    // VO에는 set 함수가 있으면 안된다. (readOnly)
    //    public void setName(String name) {
    //        this.name = name;
    //    }
    //    public void setAge(String age) {
    //        this.name = age;
    //    }
}
