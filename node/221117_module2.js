// 다른 파일에 등록한 module 가져오는 방법

// // require 함수 이용해서 파일 등록
// const result = require('./20221117_module.js');

// console.log(result);
// console.log(result.a);
// console.log(result.b);
// // console.log(result.test);
// // result.test 만 작성하면 함수의 정의만 가져옴
// result.test();
// // 함수뒤에 () 까지 붙어줘야 함수 실행이 됨
// // 함수라서 console.log는 뺐음

// // 실행방법
// // 터미널 창에서 node ./파일명



// const num = require('./221117_module.js');
// const aa = num.aa;
// const bb = num.bb;

// console.log('num', num);

// function add() {
//     return aa + bb;
// }

// // 1개인 경우
// module.exports = add;

// 여러 개인 경우
// {} 묶어서 보내면 받는 곳에서도 상태가 달라짐
// module.exports = { add };

