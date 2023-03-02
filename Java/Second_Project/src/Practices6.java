import java.util.ArrayList;
import java.util.Scanner;

public class Practices6 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		ArrayList<Practices6_Rectangle> rect = new ArrayList<>();
		
		while(true) {
			System.out.println("사각형의 가로와 세로 길이를 띄어쓰기 기준으로 입력해주세요.");
			int width = scanner.nextInt();
			int height = scanner.nextInt();
			
			if(width == 0 && height == 0) {
				break;
			}
			Practices6_Rectangle tempArr = new Practices6_Rectangle(width);
			tempArr.setHeight(height);
			
			rect.add(tempArr);
			Practices6_Rectangle.COUNT++;
			
		}
//		
//		for(int i=0; i<rect.size(); i++) {
//			// System.out.println(rect.get(i));
//			System.out.println("가로 길이는: " + rect.get(i).getWidth());
//			System.out.println("세로 길이는: " + rect.get(i).getHeight());
//			System.out.println("넓이는: " + rect.get(i).area());
//			System.out.println("----------------------");
//		}
		
		for(Practices6_Rectangle rectangle : rect) {
			System.out.println("가로 길이는: " + rectangle.getWidth());
			System.out.println("세로 길이는: " + rectangle.getHeight());
			System.out.println("넓이는: " + rectangle.area());
			System.out.println("----------------------");
		}
		System.out.println("Rectangle 인스턴스의 개수는: " + Practices6_Rectangle.COUNT);
		
	}

}
