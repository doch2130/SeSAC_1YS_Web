// setTimeout(function() {
//     console.log("1.5초 후 실행");
// }, 1500);

// 위 함수와 동일함, 문법 차이
// setTimeout(() => {
//     console.log("1.5초 후 실행");
// }, 1500);

// 이 함수를 합치면 위에 처럼 사용
// 위에 처럼 사용하면 익명 함수라고 해서 1번 사용하고 끝남
// 아래 처럼 사용하면 a() 함수가 계속 남아 있어서 사용 방법에 따라 다름
// function a() { console.log('1.5초후 실행'); }
// setTimeout( a, 1500);


const func1 = setTimeout(function() {
    console.log('1.5초 후 실행');
}, 1500);
const func2 = setInterval(function() {
    console.log('1초마다 실행');
}, 1000);

// setInterval 함수는 실행후 주기가 도는게 아니라 바로 주기가 돈다고 보면 됨

const func3 = setTimeout(function() {
    console.log('func3 실행');
}, 3000);

setTimeout(() => {
    clearTimeout(func3);
    clearInterval(func2);
}, 2500);

const func4 = setImmediate(() => {
    console.log('func4 즉시 실행');
});

const func5 = setImmediate(() => {
    console.log('func5 즉시 실행');
});
clearImmediate(func5);


