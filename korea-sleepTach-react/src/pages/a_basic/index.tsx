// index.tsx

import React from "react";
import B_React_counter from "./B_React_counter";
// 기본 export 내보내기 - 모듈명 변경 가능!, {} 생략 사용
import C_Component from "./C_Component";
// 일반 export 내보내기 - 모듈명 변경 불가!, {} 중괄호로 감싸서 사용
import { Img } from "./C_Component";
import D_JSX from "./D_JSX";
import E_jsx from "./E_jsx";

const h2Style = {
  backgroudColor: "black",
  color: "orange",
};

function index() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "black",
          color: "pink",
        }}
      >
        리액트 기본 문법
      </h1>

      <h2 style={h2Style}>리액트 VS 타입스크립트</h2>
      <B_React_counter />

      <h2 style={h2Style}>컴포넌트를 구성하는 기본 구조</h2>
      <C_Component />
      {/* 컴포넌트: 재사용 가능한 UI의 집합 */}
      <Img />

      <h2 style={h2Style}>3 JSX(TSX): 리액트의 기본 문법</h2>
      <D_JSX/>
      <E_jsx/>
    </div>
  );
}

export default index; // 기본 내보내기 - 사용하면서 컴포넌트명 변경 가능
