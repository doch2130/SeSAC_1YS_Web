
public class Practices3 {

	public static void main(String[] args) {
		int[] arr1 = {1, 2, 3, 4};

		try {
			for(int i = 0; i < 5; i++) {
				System.out.println(arr1[i]);
			}
		} catch (ArrayIndexOutOfBoundsException e) {
			System.out.println("인덱스가 범위를 벗어났습니다.");
		}
	}
}
