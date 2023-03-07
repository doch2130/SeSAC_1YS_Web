
public abstract class PracticeStudent {
	private String name;
	private String school;
	private int age;
	private int StudentNumber;
	
	public PracticeStudent(String name, String school, int age, int StudentNumber) {
		this.name = name;
		this.school = school;
		this.age = age;
		this.StudentNumber =StudentNumber;
	}
	
	public abstract void todo();
}
