import java.util.ArrayList;
import java.util.Scanner;

public class Practices2 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		ArrayList<String> arr1 = new ArrayList<>();
		while(true) {
			System.out.println("문자를 입력해주세요 : ");
			String tempText = scanner.nextLine();
			if(tempText.equals("exit")) {
				break;
			}
			arr1.add(tempText);
		}
		scanner.close();
		
		for (int i = 0; i < arr1.size(); i++) {
			System.out.println(arr1.get(i));
		}
	}

}
