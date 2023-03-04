
public class Main {

	public static void main(String[] args) {
		// 상속이랑 상관없이 일반 적으로도 사용 가능
		Person person1 = new Person();
		
		// Person + Student 속성을 전부 가진 상태의 객체가 생성된다.
		Student person2 = new Student();
				
		// 생성자가 2개 이상인 경우, 객체를 생성할 때 매개변수 타입과 개수를 생성자에 맞춰주면
		// 그에 맞춰서 생성자가 실행이 된다.
		Person person3 = new Person();
		Person person4 = new Person("생성자2번", 20);
		
		System.out.println(person2.getName());
		person2.setName("성춘향");
		System.out.println(person2.getName());
		
		person1.testOverriding();
		person2.testOverriding();
	}

}
