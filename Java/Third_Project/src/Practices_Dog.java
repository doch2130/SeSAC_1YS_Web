public class Practices_Dog extends Practices_Animal {
	public Practices_Dog(String name, int age) {
		this.type = "강아지";
		this.name = name;
		this.age = age;
		System.out.println("Dog 클래스");
	}
	
	public void makeSound() {
		System.out.println("강아지 소리를 낸다");
	}
}
