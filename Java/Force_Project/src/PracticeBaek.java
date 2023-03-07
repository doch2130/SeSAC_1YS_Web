
public class PracticeBaek extends PracticeStudent {
	private String likeFood;
	
	public PracticeBaek(String name, String school, int age, int StudentNumber) {
		super(name, school, age, StudentNumber);
	}
	
	public void setLikeFood(String likeFood) {
		this.likeFood = likeFood;
	}
	
	public void todo() {
		System.out.println("점심은 백종원 " + likeFood);
	}
}
