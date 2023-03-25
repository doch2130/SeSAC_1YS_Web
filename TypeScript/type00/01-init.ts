// 변수
// 키워드 변수이름:타입 = 값;
// 타입표기 ( type annotation )

const str:string = 'string';
const num:number = 1;
const bool:boolean = true;


// object
const arr1:number[] = [1, 2, 3];
const arr2:string[] = ['a', 'b', 'c'];
const arr3:Array<number> = [1, 2, 3];

// console.log( arr2[0].concat('!'));

// tuple
// 길이가 고정되고, 각 타입이 정해져 있는 object
const arr4:[boolean, string] = [true, 'a'];

// arr4[0]은 boolean 이라서 error 발생
// console.log(arr4[0].concat('!'));


// enum
// 특정 집합을 열거하는 타입
enum Names { sesac, 새싹 }
const name1:Names = Names.sesac;
const name2:Names = Names.새싹;
// console.log("name1: ", name1);
// console.log("name2: ", name2);


// any: 최대한 안쓰는게 좋다.
// 모든 타입에 대해서 허용한다.
const any1:any = [1, 2, '3'];


// void
// undefined, null 만 들어갈 수 있는 타입
// 보통 함수에서 return이 없는 경우에 사용한다.
const var1:void = undefined;


// never
// 끝이 없는 코드에서 사용한다.
function neverEnd():never {
  while(true) {
  }
}




// 함수
// ( 매개변수 : type ) : <return>
// function 함수이름 ( 매개변수:type ) :반환타입 {}
function sum(a:number, b:number) :number {
  return a + b ;
}

// console.log(sum());
// console.log(sum(1));
// console.log(sum(1, 2));
// console.log(sum(1, '2'));
// console.log(sum(1, 2, 3));


// ?를 붙이면 필수 값은 아니게 된다.
function sum2(a:number, b?:number) :void {
  console.log('a: ', a);
  console.log('b: ', b);
}
// sum2(1);
// sum2(1, 2);


function sum3(a:number, b?:number) :number {
  if( b === undefined ) return a;
  else return a + b;
}
// console.log(sum3(1));
// console.log(sum3(1, 2));


// interface
interface Student {
  name: string,
  age: number
  nickname?: string
}

const student1:Student = {
  name: '이름1',
  age: 10
}

const student2:Student = {
  name: '이름2',
  age: 20,
  nickname: '닉네임2'
}

function check(stu:Student) {
  console.log(stu.name);
}

// check(student1);
// check(student2);


// Class

// class 클래스 이름 {
//   변수명:타입;
//   constructor(변수:타입) {
//     this.변수명 = 변수
//   }
// }

class Person {
  id: string;
  constructor(name:string, age:number) {
    this.id = name + age;
  }
}
const person1 = new Person('이름3', 30);
// console.log('id: ', person1.id);



interface Shape {
  width:number;
  getLength():number;
}
// class Square implements Shape {
//   width:number;
//   height:number;
//   getLength():number {
//     return this.width;
//   }
// }
class Square2 implements Shape {
  constructor(readonly width:number) {}
  getLength():number {
    return this.width;
  }
}

const square1 = new Square2(10);
// console.log(square1.getLength());


class Person2 {
  constructor (public name:string, private age:number) {
    this.name = name;
    this.age = age;
  }
}
const person2 = new Person2('a', 1);
// console.log(person2.name);
// console.log(person2.age);


// 제네릭 ( generic ) <T>
function getText<T>(text:T):T {
  return text;
}

// console.log('getText1: ', getText<string>('a'));
// console.log('getText2: ', getText<number>(1));
