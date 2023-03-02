
public class JavaClassPerson {
	public String name;
	public int age;
	
	// 생성자
	public JavaClassPerson(String name, int age) {
		System.out.println("welcome");
		this.name = name;
		this.age = age;
	}
	
	// 메소드
	public void myname() {
		System.out.println("my name is " + name);
		System.out.println("my age is " + age);
	}
}
