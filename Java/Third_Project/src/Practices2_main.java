public class Practices2_main {

	public static void main(String[] args) {
		Practices2_Vehicle vehicle = new Practices2_Vehicle();
		Practices2_Bus bus = new Practices2_Bus();
		Practices2_Car car = new Practices2_Car();
		Practices2_Motorcycle motorcycle = new Practices2_Motorcycle();
		vehicle.takeVehicles();
		bus.takeVehicles();
		car.takeVehicles();
		motorcycle.takeVehicles();
		
		car.setType("자동차");
		System.out.println("car의 Type : " + car.getType());
		
		
		bus.setType("버스");
		System.out.println("bus의 Type : " + bus.getType());
		System.out.println("버스 창문 개수 : " + bus.getWindows());
		System.out.println("버스 최대 사람 탑승 수 : " + bus.getMaxPeople());
		
		Practices2_Bus bus2 = new Practices2_Bus(8, 20);
		bus2.takeVehicles();
		bus2.setType("버스");
		System.out.println("버스2 창문 개수 : " + bus2.getWindows());
		System.out.println("버스2 최대 사람 탑승 수 : " + bus2.getMaxPeople());
		System.out.println("bus2의 Type : " + bus2.getType());
	}

}
