
public class Practices2_Bus extends Practices2_Vehicle {
	private String type;
	public Practices2_Bus() {
		this.tire = 4;
		this.windows = 10;
		this.maxPeople = 15;
	}
	public Practices2_Bus(int windows, int maxPeople) {
		this.windows = windows;
		this.maxPeople = maxPeople;
	}
	
	public void takeVehicles() {
		System.out.println("버스에 타다.");
	}
	
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getWindows() {
		return windows;
	}
	public int getMaxPeople() {
		return maxPeople;
	}
}
