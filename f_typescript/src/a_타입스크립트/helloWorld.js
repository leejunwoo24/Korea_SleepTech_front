// hellowWorld.ts
console.log("Hello Typescript!");
var num = 3;
// num = '안녕하세요';
console.log(num);
// ? cf) ts 코드는 실시간으로  js 컴파일되지 x
// : TS 문법 코드는 node 파일명.ts로 실행되지 x
//! ts 파일을 js 파일로 컴파일(번역)
// 1. tsc 파일명.ts
// : 같은 파일명의 js 확장자 파일이 자동으로 생성
//! ts-node를 사용하여 실시간 번역 및 실행
// : js 파일이 생성되지 않음
// ? node 환경의 의존성은 !반드시! node_modules 폴더가 위치하는 프로젝트 최상단에서 설치
// npm install -g ts-node
// npm install ts-node --save-dev
console.log('ts-node로 ts파일 생성하기');
