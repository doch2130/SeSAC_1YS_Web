// function func1(value, call) {
//     call();
//     console.log(value);

// }
// func1('a', function() {
//     console.log('1');
// });

// function func2() {
//     console.log('2');
// }

// func1('b', func2);
// // func1 끝나면 func2 실행


// console.log('start');
// function login(id, cb) {
//     setTimeout(() => {
//         console.log('로그인 성공');
//         return id;
//     }, 2000);
// }
// const id = login('kim', null);
// console.log(id + '님 환영!');
// console.log('finish');

// 해당 함수는 오류, 잘못되었음
// setTimeout 함수는 비동기 함수라서 다른 로그가 끝나는거랑은 상관이 없기 떄문에 return id 를 해도 값이 안옴

console.log('start');
function login(id, cb) {
    setTimeout(() => {
        console.log('로그인 성공');
        cb(id);
    }, 2000);
}

login('kim', function(id) {
    console.log(id + '님 환영합니다');
});

console.log('finish');

// login 함수의 cb 에 function(id) 가 들어간거고 cb(id) = function(id) 함수를 호출해서 한 상태


