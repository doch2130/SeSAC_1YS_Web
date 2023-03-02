public class Practices6_Rectangle {
	private int width;
	private int height;
	public static int COUNT = 0;
	
	// 생성자
	public Practices6_Rectangle(int width) {
		this.width = width;
	}
	
	// 메소드
	public int area() {
		return width * height;
	}
	
	// getter
	public int getWidth() {
		return width;
	}
	public int getHeight() {
		return height;
	}
	
	// setter
	public void setWidth(int width) {
		this.width = width;
	}
	public void setHeight(int height) {
		this.height = height;
	}
}
