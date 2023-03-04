
public class Student extends Person {
	private String studentID;
	
	public Student() {
		// 상속받은 Person 생성자가 먼저 실행이 된다.
		// 부모 생성자 실행하는 방법
		// 매개변수 0개 받는 Person의 기본 생성자가 실행 된다.
		// super();
		// 부모 생성자 실행하는 방법 - 2
		// 매개변수 2개 받는 Person 생성자가 실행 된다.
		// super("홍길동", 99);
		
		// super는 생성자의 제일 첫 줄에 작성해야 한다.
		
		// protected는 상속이 되어 있으면, 접근이 가능하다.
		this.name = "성춘향";
		// age는 private로 되어 있기 때문에, 상속이 되어 있어도 접근이 불가능하다.		
		// this.age = 99;
		System.out.println("학생 생성자 실행됨");
	}
	
	public void study() {
		System.out.println("공부하기");
	}

	public String getStudentID() {
		return studentID;
	}

	public void setStudentID(String studentID) {
		this.studentID = studentID;
	}
	
	public void testOverriding() {
		System.out.println("Student Overriding Test");
	}
}
