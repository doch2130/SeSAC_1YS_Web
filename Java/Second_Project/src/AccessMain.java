import test.AccessTest;

public class AccessMain {

	public static void main(String[] args) {
//		AccessTest hello1 = new AccessTest();
//		hello1.hello();
		
		// notHello() 함수는 protected로 설정이 되어 있어서 다른 패키지에서 사용이 불가능하다.
		// hello1.notHello();
		
		AccessPerson person1 = new AccessPerson();
		
		person1.setName("새싹");
		person1.setAge(30);
		
		System.out.println(person1.getName());
		System.out.println(person1.getAge());
		
		person1.myname();
	}

}
