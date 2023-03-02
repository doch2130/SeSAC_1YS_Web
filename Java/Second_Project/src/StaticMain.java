
public class StaticMain {

	public static void main(String[] args) {
		Number number1 = new Number();
		Number number2 = new Number();
		
		number1.num1 = 1;
		number1.num2 = 1;
		
		System.out.println("number1.num1: " + number1.num1);
		System.out.println("number1.num2: " + number1.num2);
		
		System.out.println("number2.num1: " + number2.num1);
		System.out.println("number2.num2: " + number2.num2);
	}

}
