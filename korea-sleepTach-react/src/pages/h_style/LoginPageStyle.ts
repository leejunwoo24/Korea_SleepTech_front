// LoginPageStyle.ts

import {css} from "@emotion/react";;

// 전체 레이아웃 컨테이너 스타일
export const layout = css`
  box-sizing: border-box;
  display: flex;    /* flex 컨테이너 생성 */
  flex-direction: column;
  align-items: center;
  width: 100%;
`;


// ! 메인 영역 스타일 (입력폼 영역)
export const main = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border: 1px solid #dbdbdb;
  padding: 40px;
  width: 400px;

  & > input {
    box-sizing: border-box;
    margin-bottom: 10px;
    outline: 1px solid #dbdbdb;
    padding: 10px 20px;
  }

  & > button {
    box-sizing: border-box;
    margin-top: 20px;
    outline: none;
    border: 1px solid #dbdbdb;
    padding: 10px 20px;
    background-color: #444;
    color: #fafafa;
    font-weight: 600;
    cursor: pointer;
  }

  /* main > button */
  &:hover{
    background-color: #999;
  }

  &:active{
    background-color: #777;
  } 


`;


//! 하단 링크 영역
export const footer = css`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  border: 1px solid #dbdbdb;
  padding: 40px;
  width: 400px;

  
  /* 
  , & - 부모 선택자 참조 (footer)
  , & > - 부모 내의 요소에 접근 (자신 선택자: 직접적인 자식)
  */
  & > span {
    margin-right: 10px;
    cursor: default;
  }

  & > a {
    /* Link 컴포넌트는 a태그를 기반 */
    text-decoration: none;
    color: #d5ae00;
    font-weight: 600;
  }
`