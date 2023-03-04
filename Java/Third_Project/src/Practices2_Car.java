
public class Practices2_Car extends Practices2_Vehicle {
	private String type;
	public Practices2_Car() {
		this.tire = 4;
		this.windows = 4;
		this.maxPeople = 4;
	}
	
	public void takeVehicles() {
		System.out.println("자동차에 타다.");
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
}
