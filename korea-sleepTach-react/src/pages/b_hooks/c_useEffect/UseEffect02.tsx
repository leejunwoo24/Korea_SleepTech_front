import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';

// jsonplaceholder의 posts 데이터를 비동기 함수로 가져오기
// async, await, fetch()

// - 게시물 가져오기
//  >> 로딩, 성공, 실패
//  >> 해당 컴포넌트가 마운팅 될 때만 실행

// ? 각 게시물 데이터 타입 정의
type Post = {
  id: number;
  title: string;
  body: string;
}

function UseEffect02() {
  //? 게시물 상태 관리
  const [posts, setPosts] = useState<Post[]>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // ? 데이터를 불러오는 비동기 함수
  async function fetchPosts() {
    setLoading(true);
    setError(null);

    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');

      if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
      }


      const data = await response.json();

      // 데이터 처리가 완료 (성공)
      setPosts(data);
      setLoading(false);
    
    } catch (e) {
      setLoading(false);

      // 에러 객체(e)의 타입을 단언(Error 타입)
      // : 컴파일러에게 Error 객체 내부의 message 속성의 접근을 명시
      setError((e as Error).message);
    }
  }

  // ! 컴포넌트가 마운트 될 때만 한 번 실행
  useEffect(() => {
    fetchPosts();
    console.log('컴포넌트가 마운트되면 실행');
  }, []);

  // 함수의 구현부 경우 중괄호가 있으면 return도 세트로 묶여있어야 한다.
  // 만약에 중괄호 내부에 구현부를 작성을 했는데 리턴을 작성 안하면 반환이 발생하지 않게 된다.
  // return을 작성하지 않고 반환을 받을 수 있는 경우는 중괄호 스코프가 없는 한 줄 코드가 자동으로 반환이 일어난다.
  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchTerm.toLowerCase())
  });
  
  return (
    <div style={{
      margin: '0 auto',
      padding: '20px',
      backgroundColor: 'lightcoral'
    }}>
      <h4>Posts 게시물</h4>
      <input type="text" placeholder='검색어를 입력해주세요' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

      {/* 
        JSX 문법
        - HTML 내에 JS {}
        - JS 내에 HTML은 ()
      */}
      {loading && <div>게시물을 로딩중입니다.</div>}
      {error && <div>Error: {error}</div>}

      {filteredPosts.map((post) => (
        <li key={post.id}>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </li>
      ))}
    </div>
  )
}

export default UseEffect02