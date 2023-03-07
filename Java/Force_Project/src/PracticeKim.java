
public class PracticeKim extends PracticeStudent {
	private String likeFood;
	
	public PracticeKim(String name, String school, int age, int StudentNumber) {
		super(name, school, age, StudentNumber);
	}
	
	public void setLikeFood(String likeFood) {
		this.likeFood = likeFood;
	}
	
	public void todo() {
		System.out.println("점심은 김가네 " + likeFood);
	}
}
