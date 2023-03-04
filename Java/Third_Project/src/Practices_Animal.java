public class Practices_Animal {
	protected String type;
	protected String name;
	protected int age;
	
	public Practices_Animal() {
		System.out.println("Aniaml 클래스");
	}
	
	public Practices_Animal(String type) {
		this.type = type;
	}
	
	public void makeSound() {
		System.out.println("동물은 소리를 낸다");
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
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

// ----------------------------------