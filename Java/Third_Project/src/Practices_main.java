public class Practices_main {

	public static void main(String[] args) {
		Practices_Animal animal = new Practices_Animal();
		Practices_Cat cat = new Practices_Cat("나비", 9);
		Practices_Dog dog = new Practices_Dog("흰둥이", 13);
		
		animal.setAge(7);
		animal.setName("새싹");
		animal.setType("사자");
		System.out.println(animal.getAge() + " " + animal.getName() + " " + animal.getType());
		animal.makeSound();
		
		cat.makeSound();
		dog.makeSound();
	}

}
