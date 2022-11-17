
// **** 예시 및 정리 ****

// // 1. 변수 설정
// const aa = 1;
// const bb = 3;
// function test() {
//     console.log('test');
// }

// // exports 방법 1
// // // // module로서 a, b, test 함수를 내보내겠다.
// // module.exports = {
// //     aa,
// //     bb,
// //     test
// // }

// // exports 방법 2
// // 각 변수를 바로 넘겨주는 방법
// // module.exports = {
// //     aa,
// //     bb
// // }

// // exports 방법 3
// // 변수 설정 후 변수를 array 객체에 저장한 후 array 1개로 넘겨주는 방법
// const array = {
//     aa,
//     bb
// }
// module.exports = array;

// // 방법 2과 방법3는 넘겨주는 결과가 같음
// // num { aa: 1, bb: 3 }



// // **** 예시 2 ****

// const num = require('./20221117_module.js');

// // 받은 객체를 새로운 변수에 저장
// const aa = num.aa;
// const bb = num.bb;

// // console.log(result.test);
// // result.test 만 작성하면 함수의 정의만 가져옴
// result.test();
// // 함수뒤에 () 까지 붙어줘야 함수 실행이 됨


// console.log('num', num);
// // 결과 값 : num { aa: 1, bb: 3 }

// function add() {
//     return aa + bb;
// }

// // 1개인 경우
// module.exports = add;
// // 넘겨준 값 : [Function: add]
// // 사용할 때 함수 자체로 넘겨 받아서 아래 방식으로 사용해야 함
// console.log('result', result());

// // 여러 개인 경우
// // {} 묶어서 보내면 받는 곳에서도 상태가 달라짐
// module.exports = { add };
// // 넘겨준 값 : { add: [Function: add] }
// // 사용할 때 배열로 값을 넘겨 받아서 아래 방식으로 사용해야 함
// console.log('result', result.add());



console.log(obj);
// obj 객체 값 전부 출력
console.log(obj['out']);
// obj 객체의 out 값의 값 전부 출력
console.time('시간');
console.error('error');
// error를 보여주는 함수
console.timeEnd('시간');
// time => timeEnd 까지의 시간 출력, 함수 안의 '값' 이 같은 경우에만 작동
console.table([{name: 'abc'}, {name: 'def'}]);
// 해당 값을 table 방식으로 보여줌
console.dir(obj, {colors: true, depth: 1});
console.dir(obj, {colors: true, depth: 2});
// 객체의 구조를 보여주는 함수
console.trace('Error');
// console.error이 어디서 났는지 찾는 함수

