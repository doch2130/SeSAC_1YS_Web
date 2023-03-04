
public class Person {
//	private String name;
	protected String name;
	private int age;
	
	// 만약 생성자를 작성하지 않으면 아무것도 하지 않는 생성자가 1개 자동으로 생성된다.
	// 기본 생성자 또는 매개변수를 받는 생성자를 작성하면, 자동으로 생성되지 않는다.
	public Person() {
		System.out.println("사람 클래스의 인스턴스 생성됨");
	}
	
	// 생성자는 2개 이상도 생성이 가능하다.
	// 같은 이름으로 생성하는 메소드를 메소드 오버로딩 이라고 한다.
	public Person(String name, int age) {
		System.out.println("사람 클래스의 인스턴스 생성됨2");
		this.name = name;
		this.age = age;
	}
	
	// 부모 클래스에서 정의한 메소드를 자식 클래스에서 다시 정의하는 것을 메소드 오버라이딩 이라고 한다.
	// 함수의 원형이 완전히 같아야 한다. (함수 이름, 매개변수 타입, 개수)
	// 내용은 달라도 된다.
	public void testOverriding() {
		System.out.println("Person Overriding Test");
	}
	
	public void sleep() {
		System.out.println("쿨쿨 잠을 잔다.");
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}
}
