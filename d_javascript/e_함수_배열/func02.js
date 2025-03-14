//func02.js

//# 자바스크립트 함수 구조: 매개변수/인자/ 반환값 # //

// ! 1. 매개변수(parameter) VS 인자 (argument)
// - 매개변수: 함수에 전달될 데이터를 담는 변수
// - 인자: 함수 호출 시 전달하는 값

function add(a, b){ // cf) '자바'와의 차이: 타입 명시 X
  console.log(a + b);
}

add(3, 4); // 7

// ! 2. JS에서의 파라미터와 아큐먼트 특장
// : 파라미터와 아큐먼트의 수가 반드시 일치할 필요 x


function log(a){ // 파라미터: 1개
    console.log(a);
}

log(); // undefined: 인자를 전달하지 않은 파라미터 값은 undefined

// ? cf) undefined: 변수를 선언하고 초기화 이전의 타입

log(`HI`); // HI

log('HI', 'Hello'); // HI
// - 여러 개의 파라미터 & 인자값 나열 시 , 로 구분
// - 지정된 수의 파라미터 이상의 인수는 읽히지 X

function introduce(name, age) {
  console.log(`${name} is ${age} years old`);
}

introduce('이준우', 50);
introduce(50, '이준우');
// >> 매개변수의 차례로 인자값이 전달

//! 3. 반환값(return, 리턴값)
// : 결과를 반환
// - 함수 내에서 return 키워드가 읽히면 함수의 실행을 즉시 중단, return 뒤의 값을 반환

function subtract(a, b) {
  let result = a - b;
  return result;
  // console.log('안녕하세요'); - return과 같은 스코프에서 키워드 뒤의 코드는 읽히지 x
}

let outcome = subtract(10, 7);
console.log(outcome);
console.log(subtract(10, 7));

console.log(introduce('이도경', 30));

// cf) return이 없는 함수는 실행 시 undefined를 반환
//    >> 일반적으로 즉시 콘솔 출력 시 사용



function square1 (x){
  return x * x;
}
const square2 = function (x) {
  return x * x;
}

const square3 = (x) => {
  return x * x;
}

console.log(square1(2));
console.log(square2(45));
let number = square3(2);
console.log(number);