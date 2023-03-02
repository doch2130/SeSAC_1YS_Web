import java.util.Scanner;

public class Practices4 {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력해주세요.");
		int width = scanner.nextInt();
		int height = scanner.nextInt();
		
		Practices4_Rectangle rectangle = new Practices4_Rectangle(width, height);
//		rectangle.area();
		System.out.println(rectangle.area());
	}

}
