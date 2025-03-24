//settings.ts

/*
  # 타입스크립트 환경 설정

  ! 1. Node.js 설치
  : JavaScript의 '런타임(JS의 프로그램을 실행할 수 있는 환경)' 환경
  - TS는 JS의 슈퍼셋이기 때문에 'Node.js'환경에서 동작

  ? Node.js 설치 전 삭제

  - 윈도우(Windows)
    : 윈도우 키 > 프로그램 추가/제거 > Node.js 검색 후 삭제

    : 아래 경로에 해당하는 디렉토리(폴더) 식제
      윈도우 키 > 파일 탐색키 > 로컬디스크 > program files or program files(x86) > node라는 이름의 폴더를삭제
                                        > 사용자 > ITPS > AppData > node라는 이름의 폴더를 삭제
                                        > 사용자 > users > AppData > node라는 이름의 폴더를 삭제

  - 맥(Mac OS)
    : Homebrew를 사용하여 Node 제거 방법
      응용 프로그램 > 유틸리티 폴더 > 터미널 진행
      brew uninstall --force node



    : 윈도우 키 + r
      > cmd(명령 프롬프트 실행)
        > node -v
          npm -v

? Node.js 설치
: 공식 웹 사이트(브라우저 > node.js 검색)
https://nodejs.org/ko

- LTS(Long Term Support) 버전 설치 권장
: 파일 탐색기 > 다운로드 > 다운로드 된 node.js 실행


? 설치 완료 여부 확인
  윈도우 키 + r > cmd(명령 프롬프트 창)
  node -v / npm -v

? Windows에서 npm 실행이 되지 않을 경우
  (Node.js 시 npm이 자동 설치)

윈도우 키 > 시스템 환경 변수 편집 > 시스템 속성 > 고급 > 우측 하단의 환경 변수 클릭

: (위)사용자 변수에서 변수 Path 더블 클릭
    '사용자 이름'에 대한 사용자 변수 설정
    - 파일 탐색기 > c드라이브 > 사용자(Users) > 자신의 컴퓨터 이름(ITPS) > AppData > Roaming > npm 경로를 복사
    (npm 폴더가 존재하지 않을 경우 생성 후 경로 복사)
    : C:\Users\ITPS\AppData\Roaming\npm

: (아래)시스템 변수 Path 설정
    파일 탐색기 > c드라이브 > Program Files > nodejs 경로를 복사

    > 복사한 경로를 Path 변수란에 새로 만들기 클릭 > 경로 삽입
    (삽입 시 마지막에 \(원화)기호 첨부)
    C:\Program Files\nodejs\


>>>>>>> 환경 변수 편집 후에는 컴퓨터 자체 '다시 시작'을 권장 <<<<<<<

! 2. npm
: NPM(Node Package Manager)는 Node.js의 기본 패키지 관리 도구
- NPM을 사용하여 JS의 라이브러리를 쉽게 설치하고 관리
- 프로젝트의 의존성 관리 & 스크립트 실행 기능을 제공

? cf) Node 설치 시 NPM 자동 설치
    : 설치 확인 명령어
    : npm -v

? npm 기본 명령어
  1. npm init
    : 새로운 Node.js 프로젝트 시작
    - 기본값으로 package.json 파일 생성
    - 'y옵션 추가' (npm init -y)
      : 질문 없이 기본값으로 package.json파일 생성

  2. npm install
    : package.json 파일에 명시된 모든 "의존성"을 설치
    : 특정 패키지 설치 방법
      : npm install 패키지명 
      - '-D | --save-dev 옵션 추가'
      : 개발 의존성으로 패키지를 추가

  3. npm uninstall
    : 모든 "의존성" 패키지 제거
    : 특정 패키지 제거 방법
      : npm uninstall 패키지명

& === npm 초기화 ===
: 새로운 Node.js 프로젝트 시작
  npm init -y

  ? cf) .json 확장자 파일은 주석 불가!

! 3. typescript
: 타입스크립트를 설치 (npm 사용)
: 타입스크립트 사용을 위해서는 로컬 | 전역 환경에 TS 설치가 필수 ! 

- 전역설치('g 옵션', global)
  : 개발자 컴퓨터 전체에 기능 추가

- 프로젝트 별 설치(개발 의존성 설치)
  : 현재 사용하고 있는 프로젝트 내에 기능 추가

: git bash 사용
  +) d_typescript (TS 프로젝트 최상단)
  
  ? npm 사용하여 '타입스크립트 패키지' 설치
  1) 로컬 설치(프로젝트 내)
  npm install typescript --save-dev
    - 해당 명령은 TS 프로젝트의 '개발' 의존성으로 추가
      (devDependencies에 추가)
    - 베포 시 포함되지 X

    cf) -D VS -S
      : devDependencies - 개발과정에서 필요한 패키지들의 목록 (-D)
      : dependencies - 프로젝트 실행에 필요한 패키지들의 목록 (-S)

  2) 전역 설치(컴퓨터 내)
  npm install -g typescript

  ? 프로젝트 내의 타입스크립트 버전 확인(설치 확인)
  tsc -v

! 4. tsc
: typescript complier
: TS(.ts) 파일은 JS(.js) 파일로 변환하는 도구
- 브라우저와 Node.js가  "TS파일을 직접 실행 X" 때문에 tsc로 코드 전환이 필수!

? tsc 기본 명령어
- tsc 파일명.ts
  : 동일한 파일명의 .js 파일이 생성
  - 해당 .js 파일은 TS 코드에서 타입 정보가 제거된 상태

? tsconfig.json 파일
  : 타입스크립트 프로젝트의 설정을 저장하는 파일
  : 컴파일 방법이 명시

  npx tsc --init





# 순서
  [f_typescript 위치]
  npm init

  npm install -g typescript
  npm install --save-dev typescript

  >> tsc -v

  npx tsc --init
*/



// ! 터미널 명령어 
// 터미널 '열기' 단축키
// : ctrl + shift + ``(백틱)

// ? cd 명령어: 사용자가 현재 위치하는 디렉토리(폴더) 변경할 때 사용
// : change directory

// 1) 특정 디렉토리로 이동(절대 경로)
// cd 전체_디렉토리_경로   ex) cd c:/이준우/Korea_SleepTech_front/d_javascript/m_예외

// 2) 홈 디렉토리로 이동(프로젝트 최상단)
// cd | cd ~ 

// 3) 현재 디렉토리를 기준으로 상위 디렉토리 이동
// cd ..

// 4) 이전 디렉토리 이동 (상위 하위 개념 x)
// cd -

// 5) 현재 디렉토리를 기준으로 하위 디렉토리 이동
// cd 하위/디렉토리/경로