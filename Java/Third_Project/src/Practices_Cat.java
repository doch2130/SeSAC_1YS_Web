public class Practices_Cat extends Practices_Animal {
	public Practices_Cat(String name, int age) {
		this.type = "고양이";
		this.name = name;
		this.age = age;
		System.out.println("Cat 클래스");
	}
	
	public void makeSound() {
		System.out.println("고양이 소리를 낸다");
	}
}
