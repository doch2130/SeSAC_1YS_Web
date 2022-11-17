// const a = 'a변수';
// const b = 'b변수';

// function test() {
//     console.log('test');
// }

// // module로서 a, b, test 함수를 내보내겠다.
// module.exports = {
//     a,
//     b,
//     test
// }

const aa = 1;
const bb = 3;

// 방법 1
// module.exports = {
//     aa,
//     bb
// }

// 방법 2
const array = {
    aa,
    bb
}

module.exports = array;


// 방법 1과 방법2는 결과가 같음
// num { aa: 1, bb: 3 }
