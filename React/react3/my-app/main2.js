// @ts-check

// 전개 연산자 연습

const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(...arr);

console.log('----------------');

// arr의 메모리 주소값을 copyArr에 대입한 결과가 된다.
const copyArr = arr;
console.log(copyArr);

// 메모리 주소 값을 비교하는 상황이라서 True가 출력된다.
console.log(arr === copyArr);

console.log('----------------');

const copyArr2 = [...arr];
console.log(copyArr2);

// 전개 연산자를 통해서 arr은 값이 동일하지만,
// 메모리 주소는 달라졌기 때문에 False가 출력된다.
console.log(arr === copyArr2);

console.log('----------------');

const obj = {
  pororo: '뽀로로',
  lupy: '루피',
  crong: '크롱',
};

const copyObj = obj;

console.log(obj);
console.log(copyObj);
console.log(obj === copyObj);

console.log('----------------');

console.log({ ...obj });

console.log('----------------');

// lupy는 영어로 변경되고, 나머지는 기존 obj 값을 가져온다.
const copyObj2 = { ...obj, lupy: 'lupy' };

console.log(obj);
console.log(copyObj2);
console.log(obj === copyObj2);

console.log('----------------');

// foo 함수에서 a, b 인자만 제대로 받고, 나머지는 대충 받아도 되는 경우
// 전개연산자를 사용해서 받을 수 있다.
// function foo(a, b, ...rest) {
// rest 변수에는
// rest = {c: 'dd', d: 'ee'} 형식으로 나머지 변수의 값이 들어간다.
// }
