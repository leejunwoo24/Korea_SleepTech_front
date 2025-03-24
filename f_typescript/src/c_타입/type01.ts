// type01.ts
export const tem = '';

// ! === 타입스크립트의 '타입' === //
// : 타입 명시(작성)가 필수 사항 X
// - 프로그램의 안정성과 가독성을 높이는 역할

// ? 타입 명시 방법
// : 타입 어노테이션(type annotation - 타입 주석)
// - 변수명 뒤에 콜론을 사용하여 타입 지정

// ? 타입 종류
// & 1. 기본 타입(원시 타입 - string, boolean 등)
// typeof 연산자 사용 시 나타내는 변환값과 동일한 명시 (소문자)

let name: string = "이승아";
let age: number = 29;
let isStudent: boolean = false;
//? 권장) let 변수명: 타입명 = 값;
// >> 타입을 명시하는 경우 타입체킹이 강화!

let anyData = '문자열'; // 타입 생략 가능: 타입 채킹을 생략 X

// name = 4;
// anyData = 123; - 타입을 명시하지 않아도 초기화 데이터로 타입 지정됨!

// & 2. 배열 타입(list, array)
// : 순서가 있는 요소의 모음을 나타내는 자료 구조
// - 변수명 뒤에 콜론 사용 *
// - 기본 타입명 뒤에 배열을 나타내는 []를 첨부
let list1: string[] = ['1', '2', '3'];

// - 제네릭 타입: Array<기본타입>
let list2: Array<number> = [4, 5, 6];

// & 3. void 타입
// : 아무런 값이 없다.
// - 주로 함수에서 반환값이 없거나, return 키워드가 있더라도 값이 없을 때 사용되는 타입

// function 함수명(파라미터: 타입): 반환타입 {}
function voidType(parameter: number): void {  
  // TS에서는 파라미터에 타입 미지정 시 오류 발생!
  // - Type annotation 작성이 필수!

  console.log(parameter);
  return;
}

voidType(10); // 10

function stringReturn(str1: string, str2: string): string {
  return str1 + str2;
}

console.log(stringReturn('이' , '승아')); // 이승아

// & null & undefined
// null: 아무것도 없음, 데이터가 잘못된 경우
// undefined: 변수 생성은 했지만, 안에 값이 없을 경우

// ? JS와의 차이점
// - JS는 각각의 타입에 다른 타입의 값 지정 가능

// - TS는 각각의 타입으로 지정된 변수에는 각 타입만 할당 가능
// >> 어노테이션을 사용한 타입 강화 시!

let nullType: null;
// nullType = 3;
// nullType = 안녕하세요;
nullType = null;

let undefinedType: undefined;
// undefinedType = 10;
// undefinedType = '반갑습니다.';
undefinedType = undefined;

// & 5. any 타입 (모든)
// : 모든 타입에 대해 허용하는 타입
// - 타입 검사 오류 방지를 위해 사용(모든 타입과 호환 가능)
// - 사전에 오류 타입 계산을 할 수 X (ts를 js처럼 사용 )

let anyType: any = 3;
anyType = 'hello';
anyType = false;
anyType = {};
anyType = [];

let unknownData; //let unknownData: any
// : 직접적인 타입 명시를 하지 않을 경우 값이 할당되기 전까지 자동으로 any타입으로 인식

// & never 타입
// : 절대 발생하지 않는 값의 타입
// - 함수가 예외를 발생시키거나, 끝나지 않을 때 사용
function error(message: string): never{
  throw new Error(message);
}

// error("에러발생");

let username : string, userAge: number, isSubscrigbed: boolean;

let fruites: string[], numbers: number[];

function voidReturnFunction(message: string): void{
  console.log(message);
}

