
import java.util.Scanner;

public class Practices1 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int[] arr1 = new int[5];
		
		System.out.println("5개의 정수를 입력하세요.");
		int sum = 0;
		for(int i = 0; i < arr1.length; i++) {
			arr1[i] = scanner.nextInt();
			sum += arr1[i];
		}
		scanner.close();
		
		System.out.println((double)sum/arr1.length);
	}

}
