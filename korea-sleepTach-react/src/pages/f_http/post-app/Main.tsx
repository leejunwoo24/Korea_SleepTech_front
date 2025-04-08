import React from 'react'
import PostList from './components/PostList'
import PostForm from './components/PostForm'

/*
# React(TS) + Axios + localStorage(저장소)
리액트 >> 로컬 스토리지 (게시글 CRUD)

! 요구사항
: 게시글 CRUD

! 프로젝트 폴더 구조
post-app
> apis / postApi.ts
> components / PostForm.tsx, PostList.tsx

> Main.tsx
*/

function Main() {
  return (
    <div style={{padding: '20px'}}>
      <h1>게시판 CRUD (Axios/localStorage)</h1>
      <PostForm/>
      <hr />
      <PostList/>
    </div>
  )
}

export default Main