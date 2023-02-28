import java.util.Scanner;
import java.util.Arrays;

public class Main {
	
//	메소드
//	public static void hello() {
//		System.out.println("메소드 hello()");
//	}
//	public static int sum(int num1, int num2) {
//		return num1+num2;
//	}
//	public static void calculator(double num1, double num2) {
//		double sum = num1 + num2;
//		double min = num1 - num2;
//		double nanu = num1/num2;
//		double gob = num1 * num2;
//		
//		System.out.println("덧셈 결괴 : " + sum);
//		System.out.println("뺄셈 결괴 : " + min);
//		System.out.println("나눗셈 결괴 : " + nanu);
//		System.out.println("곱셈 결괴 : " + gob);
//		
//	}
	
	public static void printArray(int[] arr1) {
		for(int i=0; i<arr1.length; i++) {
			arr1[i] = i;
			if(i==0) System.out.print('[');
			if (i==arr1.length -1) System.out.print(arr1[i] + "]");
			else System.out.print(arr1[i] + ", ");
		}
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		System.out.println("Hello World123");
//		System.out.print("Hello World");
//		System.out.println("Hello World456");

//		System.out.println("이름, 나이, 키, 결혼 여부를 빈칸으로 분리하여 입력하여 주세요.");
//		스캐너 객체 생성
//		Scanner scanner = new Scanner(System.in);
//		
//		String name = scanner.next();
//		int age = scanner.nextInt();
//		double height = scanner.nextDouble();
//		boolean single = scanner.nextBoolean();
//		
//		System.out.print("이름은 " + name + ", ");
//		System.out.print("나이는 " + age + "살, ");
//		System.out.print("키는 " + height + "cm, ");
//		System.out.print("결혼 여부는 " + single + "입니다.");
		
//		System.out.println("이름을 입력하세요.");
//		String name = scanner.nextLine();
//		System.out.println("나이를 입력하세요.");
//		int age = scanner.nextInt();
//		
//		System.out.println("안녕하세요! " + name + "님(" + age + "세)");
		
//		int number = 10;
//		if(number%3 == 0) {
//			System.out.println("3의 배수입니다.");
//		} else {
//			System.out.println("3의 배수가 아닙니다.");
//		}
//		
//		String str1 = new String("홍길동");
//		String str2 = "홍길동";
//		
//		if(str1 == "홍길동") System.out.println(true);
//		else System.out.println(false);
//		
////		true가 나오기는 하지만, equals()를 사용하는 것이 좋습니다.
//		if(str2 == "홍길동") System.out.println(true);
//		else System.out.println(false);
//		
//		if(str1.equals("홍길동")) {
//			System.out.println(true);
//		} else {
//			System.out.println(false);
//		}
//		
//		
//		int num = 0;
//		switch (num) {
//		case 0:
//			System.out.println("0");
//			break;
//		case 1:
//			System.out.println("1");
//			break;
//		default:
//			System.out.println("0도 1도 아님");
//		}
//		
//		for (int i=0; i<10; i++) {
//			System.out.println("i의 값은 : " + i);
//		}
//		
//		int i = 0;
//		while(i<10) {
//			System.out.print(i + " ");
//			i++;
//		}
//		
//		System.out.println();
//		i = 0;
//		do {
//			System.out.println("do while : " + i);
//			i++;
//		} while(i < 10);
//		
//		hello();
//		System.out.println("sum: " + sum(1, 2));
		
		
//		Scanner scanner = new Scanner(System.in);
//		System.out.println("나이를 입력하세요.");
//		int age = scanner.nextInt();
//		
//		if(0 < age && age < 8) {
//			System.out.println("유아");
//		} else if(age > 7 && age < 14) {
//			System.out.println("초등학생");
//		} else if(age > 13 && age < 17) {
//			System.out.println("중학생");
//		} else if(age > 16 && age < 20) {
//			System.out.println("고등학생");
//		} else if( age >= 20) {
//			System.out.println("성인");
//		} else {
//			System.out.println("잘못된 값을 입력하였습니다.");
//		}
		
		
//		System.out.println("이름을 입력하세요.");
//		String name = scanner.nextLine();
//		if(name.equals("홍길동")) {
//			System.out.println("남자");
//		} else if (name.equals("성춘향")) {
//			System.out.println("여자");
//		} else {
//			System.out.println("모르겠어요.");
//		}
		
		
//		System.out.println("숫자를 입력하세요");
//		int number = scanner.nextInt();
//		
//		for(int i=1; i<=number; i++) {
//			System.out.print(i + " ");
//		}
//		
//		System.out.println("숫자 두 개를 입력하세요.");
//		double num1 = scanner.nextDouble();
//		double num2 = scanner.nextDouble();
//		calculator(num1, num2);
//		
//		scanner.close();
		
//		배열 초기화 후 사용
		int[] arr1 = {0, 0, 0};
//		배열 크기만 설정 후 사용
		int[] arr2 = new int[3];
		
//		for문
		for(int i=0; i<arr1.length; i++) {
			arr1[i] = i;
//			if(i==0) System.out.print('[');
//			if (i==arr1.length -1) System.out.print(arr1[i] + "]");
//			else System.out.print(arr1[i] + ", ");
		}
//		직접 만든 메소드
		printArray(arr1);
//		Arrays 클래스 이용, import 필요
		System.out.println(Arrays.toString(arr1));
		
		System.out.println();
//		for-each문
		for (int value : arr1) {
			System.out.print(value + " ");
		}
		
		
	}

}
