
public class PracticeMain {

	public static void main(String[] args) {
		PracticeKim kim = new PracticeKim("김가네", "서울대", 22, 20220101);
		PracticeBaek baek = new PracticeBaek("백종원", "고려대", 50, 20100805);
		
		kim.setLikeFood("김밥");
		baek.setLikeFood("피자");
		
		kim.todo();
		baek.todo();
	}

}
