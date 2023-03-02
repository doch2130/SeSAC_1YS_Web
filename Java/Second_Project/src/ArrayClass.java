
import java.util.ArrayList;
//import java.util.Arrays;

public class ArrayClass {

	public static void main(String[] args) {
//		
//		int[][] arr1 = {{0, 1, 2}, {3, 4, 5}};
//		int[][] arr2 = new int[2][3];
//		
//		for (int[] arr : arr1) {
//			for (int value : arr) {
//				System.out.print(value + " ");
//			}
//			System.out.println("");
//		}
//		
//		int num = 0;
//		for (int i = 0; i < arr2.length; i++) {
//			for (int j = 0; j < arr2[i].length; j++) {
//				arr2[i][j] = num;
//				num++;
//			}
//		}
//		
//		for (int[] arr : arr2) {
//			for (int value: arr) {
//				System.out.print(value + " ");
//			}
//			System.out.println("");
//		}
		
		// ArrayList
		
		ArrayList<Integer> arr1 = new ArrayList<>();
		ArrayList<Integer> arr2 = new ArrayList<>();
		
		for (int i = 1; i < 6; i++) {
			arr2.add(i);
		}
		
		// arr1 맨 뒤에 2 추가
		arr1.add(2);
		
		// arr1 0번째 인덱스에 1 추가
		arr1.add(0, 1);
		
		// arr1 요소 뒤에 arr2 추가
		arr1.addAll(arr2);
		
		// 1번째 인덱스 요소 제거
		arr1.remove(1);
		
		// arr1 요소 모두 제거
		arr1.clear();
		
		for (int value : arr1) {
			System.out.print(value + " ");
		}
		
//		System.out.println("");
//		for (int i = 0; i < arr1.size(); i++) {
//			System.out.print(arr1.get(i) + " ");
//		}
		
		System.out.println("");
		System.out.println("index of 2 : " +  arr1.indexOf(2));
//		System.out.println("index of 6 : " +  arr1.indexOf(6));
		
	}

}
