let list = ['apple', 'banana'];
[item1, item2] = list;
// let item1 = list[0];
// let item2 = list[1];
console.log(item1);
console.log(item2);
[item1, item2 = 'peach', item3 = 'orange'] = list;
// item2에 기본 값이 설정되어 있지 않으면 peach로 설정한다.
// item3에는 기본 값이 설정되어 있지 않아서 orange로 출력된다.
// 임시로 설정을 한다고해서 length 값은 변하지 않고 처음 설정 값으로 적용된다.
console.log(item1);
console.log(item2);
console.log(item3);


let x = 1;
let y = 3;

let temp = x;
x = y;
y = temp;

[y,x] = [x,y];
// [1, 3]
// [a, b] = [1, 3] => a = 1, b = 3
// [b, a] = [1, 3] => a = 3, b = 1
// 위의 temp를 하는 방법과 아래의 구조분해 방식의 결과는 동일 함

let obj = {
    a: 'one',
    b: 'two'
}
// let a = obj.a;
// let {a, b} = obj;
// console.log(a);
// console.log(b);

// 배열 구조분해는 순서(Index)에 따라서 값이 들어간다면, 객체 구조분해는 key 값을 기준으로 하기 때문에 순서가 상관 없다.

// let {b: key1, a} = obj;
// console.log(a);
// console.log(key1);
// b라는 key 값을 가져와서 key1 이라는 변수로 대체한다.

// let {b: key1, a, c = 'three' } = obj;
// console.log(a);
// console.log(key1);
// console.log(c);
// b라는 key값을 가져와서 key1 변수로 대체한다. , c라는 key값이 없으면 값을 three로 설정한다.

let {b, ...rest } = obj;
console.log(b);
console.log(rest);
// ...변수, 전개 연산자
// b key의 값을 가져오고, obj의 나머지 key, value 값을 가져온다
// 전개 연산자는 처음 또는 중간에서는 사용할 수 없고 무조건 마지막에만 사용할 수 있다.




// 일반 문법
// const num = require('./221117_module.js');ㄴ
// const aa = num.aa;
// const bb = num.bb;
// 구조분해 문법
const {aa, bb} = require('./221117_module.js');
// require을 할 때 구조분해로 받는 방법도 가능하다.
