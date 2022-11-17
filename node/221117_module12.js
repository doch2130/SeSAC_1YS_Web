const { Car } = require('./221117_module11.js');
console.log(Car);

var car1 = new Car('red');
var car2 = new Car('blue');
var car3 = new Car('yellow');

// new Car()을 하여 생성하게되면 constructor() 이 기본적으로 생성됨
// 현재 Car() 클래스의 constructor(color)에는 color 이라는 파라미터 값을 받기 때문에
// 생성할 때 필요한 값을 추가로 입력해줘야 한다.

console.log(car1.returnColor());
console.log(car2.returnColor());
console.log(car3.returnColor());
