// @ts-check

const arr = [1, 2, 3, 4, 5];

// el에는 배열의 데이터가 1개씩 순서대로 들어간다.
// index는 배열의 index 번호값이 들어간다.
arr.map((el, index) => {
  console.log(el, index);
  return 0;
});

const resultArr = arr.map((el) => el * 3);
console.log(resultArr);
