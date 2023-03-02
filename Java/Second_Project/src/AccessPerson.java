
public class AccessPerson {
	private String name;
	private int age;
	
	// 생성자
//	public AccessPerson(String name, int age) {
//		System.out.println("welcome");
//		this.name = name;
//		this.age = age;
//	}
	
	// 생성자
	public AccessPerson() {
		System.out.println("welcome");
	}
	
	// 메소드
	public void myname() {
		System.out.println("my name is " + name);
		System.out.println("my age is " + age);
	}
	
	// getter
	public String getName() {
		return name;
	}
	public int getAge() {
		return age;
	}
	
	// setter
	public void setName (String name) {
		this.name = name;
	}
	public void setAge (int age) {
		this.age = age;
	}
}
