console.log(global);
console.log(global.console);

let obj = {
    out: {
        in: {
            key: 'value'
        }
    }
};

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

