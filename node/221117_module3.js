const add = require('./221117_module2.js');

console.log(add);
// console.log(add());
// console.log(add.add());
// { add : function } 형태로 넘어왔을 때는 console.log(result.add()); 로 사용하면 됨


// 이전 module2.js에서 module.exports = add; 로 넘겨줬다고 해서
// require 로 받을 때 const add 인 같은 변수 이름으로 받을 필요는 없음
// 다른 result 변수 이름으로 해도 실행 가능

const result = require('./221117_module2.js');

console.log('result', result);
console.log('result', result());
// console.log('result', result.add());


