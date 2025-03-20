// a_storage.js

/*
! JS 웹 스토리지 개요

& 1. Client-side Storage란?
: 클라이언트 측 저장소로서 웹 브라우저를 통해 사용자의 컴퓨터나 모바일 장치에 직접 데이터를 저장하는 기술
: 서버 대신 사용자의 로컬 환경(브라우저 자체)에 데이터를 보관함으로써 더 빠르고 효율적인 데이터 접근을 가능

& 2. Client-side Storage의 특징
1) 퍼포먼스 개선: 서버와의 통신 필요성을 줄여, 응답 시간과 성능이 향상
2) 오프라인 액세스: 네트워크 연결이 없어도 데이터에 접근 가능
3) 사용자 경험 개선: '개인 설정이나 이전 상태를 저장'하여, 사용자에게 맞춤화된 경험을 제공

& 3. 클라이언트 사이드 스토리지의 용도

1) 세션 관리: 로그인 상태, 사용자 프로필 설정, 테마 선택 등의 사용자 세션 정보를 저장

2) 양식 데이터 저장: 사용자가 양식을 입력하는 도중 페이지를 실수로 벗어나더라도, 이미 입력된 정보를 저장

3) 쇼핑 카트 데이터 유지: 쇼핑 사이트에서 사용자가 카트에 추가한 항목을 유지

4) 게임 상태 저장: 게임 진행 상태를 로컬에 저장해, 다음 접속 때 이전의 진행 상태를 유지 가능

& 4. 클라이언트 사이드 스토리지의 종류

! 1) 쿠키 (Cookies)
- 특징: 작은 텍스트 파일로, 서버가 사용자의 브라우저에 데이터를 저장하도록 요청할 때 

저장 용량: 약 4KB 
수명: "만료 날짜 설정 가능"
서버와의 통신: 모든 HTTP 요청과 함께 서버로 전송됨(네트워크 대역폭을 사용)
보안: 쉽게 접근 및 변조 가능하므로 보안 측면에서 취약
사용 예: 세션 관리, 사용자 추적, 개인화 설정에 활용

2) 웹 스토리지 (Web Storage)

!2-1) 로컬 스토리지 (LocalStorage)
- 특징: 브라우저 세션 간에도 데이터를 저장할 수 있으며, 사용자가 직접 삭제하지 않는 한 데이터가 유지

저장 용량: 최대 5MB
수명: 데이터는 브라우저 세션이 종료되어도 유지됨
서버와의 통신: 데이터는 클라이언트 측에만 저장되며, 요청 시 "서버로 전송되지 않음"
보안: HTTPS 사용 시 외부 접근 방지 가능하지만 XSS 공격에 취약할 수 있음
사용 예: 대량의 데이터 저장, 사용자 설정 저장

2-2) 세션 스토리지 (SessionStorage)
- 특징: 브라우저 세션 동안만 데이터를 저장하며, 탭을 닫으면 데이터가 삭제

저장 용량: 최대 5MB
수명: 탭 또는 윈도우가 닫힐 때까지만 데이터 유지
서버와의 통신: 로컬 스토리지와 마찬가지로 클라이언트 측에만 저장
보안: 로컬 스토리지와 유사하나, 탭이 닫히면 데이터가 삭제되어 임시 정보 저장에 적합
사용 예: 임시 정보의 저장(예: 한 세션 동안의 폼 입력 데이터)

캐시 (Cache)
특징: 웹 페이지나 애플리케이션의 자원(이미지, 스크립트 파일, 스타일시트 등)을 로컬에 저장해 빠른 로딩을 도모
>> 용도: 자주 사용되는 리소스의 재요청을 줄여, 로딩 시간을 단축하고 네트워크 트래픽을 감소

? ===== 시나리오 기반 사용 추천 =====
쿠키: 사용자 인증 토큰 등의 작은 데이터와 서버와의 지속적인 상태 유지가 필요한 정보를 저장할 때 사용
EX) 로그인을 해야 접근할 수 있는 페이지 

로컬 스토리지: 사용자의 설정이나 큰 양의 데이터를 장기간 저장할 필요가 있을 때 이용
EX) 변경되는 데이터값을 저장

세션 스토리지: 쇼핑 카트의 내용물 또는 한 페이지 내 세션 동안 필요한 정보를 저장할 때 사용

*/