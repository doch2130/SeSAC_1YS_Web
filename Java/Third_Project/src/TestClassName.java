import test.TestClass;

// 동일한 패키지에 있는 클래스가 아니라서 import로 추가를 해줘야 상속을 할 수 있다.
public class TestClassName extends TestClass {
	public void test() {
		// 다른 패키지여도 protected이면 상속 받을 수 있다.
		this.n = 3;
		// default는 다른 패키지에서는 접근 할 수 없다.
		// this.n2 = 4;
	}
}
