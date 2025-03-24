// type03.ts
export const tmp = '';

// ! 타입 별칭(type alias)
// : 새로운 타입 이름을 생성하여 기존 타입을 참조할 수 있게 하는 기능
// - 코드의 재사용성과 가독성 향상

// ? 기본 사용 방법
// : type 키워드를 사용하여 정의
// : tpye 타입별칭 = 타입;

// ? 타입별칭 지정 시 UpperCamelCase 사용을 권장!

// & 1) 변수 타입 별칭: 사용 X
type TextType = string;
let textMsg: TextType = "텍스트 문자열 입니다.";

type NumberType = number;
let num1: NumberType = 123;
let num2: number = 123;

// cf) 원시 타입 키워드 그대로 사용하는 것이 코드의 해석 & 가독성에 도움

// & 2) 객체 타입 별칭
// : 선택적 프로퍼티 & 읽기 전용 속성 모두 사용 가능

type UserType = {
  name?: string;
  readonly age: number;
}

const user1: UserType = {
  name: '이승아',
  age: 40
} 

// user1.age = 20;

const user2: UserType = {
  name: '이도경',
  age: 30
}

// & 3) 함수 타입 별칭
// : User 타입인 매개변수를 받아 boolean 타입의 반환값을 생성하는 함수

type User = {
  id: string;
  password: string;
}

// 함수 타입 별칭
// type 타입별칭 = (매개변수 타입 지정) => 반환타입;
type VallidUser = (user: User) => boolean;

const isValidUser: VallidUser = (user) => user.id !== '';

let userA: User = {
  id: 'qwerty',
  password: 'qwe123'
}

let userB: User = {
  id: '',
  password: 'qwe123123'
}

console.log(isValidUser(userA));
console.log(isValidUser(userB));

// cf) 함수 타입 지정 시 반환 값이 없는 경우 void 타입

// ? 함수 타입 별칭 지정 시 주로 하살표 함수를 사용
// : 함수 타입 별칭 사용 함수는 반드시! 화살표 함수의 체계를 가져야 함
type FuncType = (num: number) => number;

// const exampleFunc = function(num): FuncType {
//   num *= 2;
//   return num;
// }
const exampleFunc: FuncType = (num) => {
  num *= 2;
  return num;
}

const exampleFunc2 = (num: number): number[] => {
  return [num, num]
}

let age: number, isStudent: boolean;

age = 13;
isStudent = true;
console.log(`Age: ${age}, IsStudent: ${isStudent}`); 

type ProductType = {
  id: string;
  name: string;
  price: number;
  // +) 타입 별칭은 ,(콤마); (세미콜론) 모두 사용 가능
  //    >> 일반 객체와의 구분을 위해 세미콜론을 사용을 권장!
}

let product: ProductType = {
  id: 'qwe123',
  name: '이승아',
  price: 4000
};

console.log(product);