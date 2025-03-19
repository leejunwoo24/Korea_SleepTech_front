// pracitce.js
// JsonPlaceholder
// : 가상의 무료 데이터를 제공 Mock Server(가짜 서버)
// - REST API 활용하여 사용
// - 게시글, 댓글, 사용자, 사진 등의 정보를 JSON 형식으로 제공

// [전체 조회]
// https://jsonplaceholder.typicode.com/원하고자하는데이터
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts


// [단건 조회]
// https://jsonplaceholder.typicode.com/원하고자한데이터/id값(숫자)

// ! 1. Promise 체이닝 : 사용자 목록
function fetchPromiseUserData() {
  try{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      //HTTP 응답 상태 확인 (200번대가 아니라면 애러 발생처리)

      if(!response.ok){
        throw new Error(`HTTP error status: ${response.status}`)
      }

      return response.json();
    })
    .then(users => {
      users.forEach(user => console.log(user));
    })

  } catch (error) {
    console.log(error);
  }
}

console.log('promise로 데이터 처리하기');
fetchPromiseUserData();

// ! 2. async & await
async function fetchAsyncPostsData() {
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    if(!response.ok){
      throw new Error(`HTTP error: status: ${response.status}`);
    }

    const post = await response.json();

    console.log(post);

  } catch(e){
    console.error(`게시물 가져오기 실패 ${e.message}`);
  }

}

console.log(`Async, Await로 데이터 가져오기`);
fetchAsyncPostsData();





async function fetchAsyncAlbumData(){

  try{ 
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");

    if(!response.ok){

      throw new Error(`데이터를 가져오지 못 했습니다. ${response.status}`);
    }

    const albums = await response.json();

    albums.forEach(album => console.log(album));
  } catch (e) {
    console.error(e.message);
  }


}

console.log('jsonPlaceholder 앨범 데이터 가져오기 시작');
fetchAsyncAlbumData();


function fetchPromiseAlbumData(){

  try{
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(response => {
      if(!response.ok){
        throw new Error(`데이터 가져오기 실패! ${res.status}땜시`);
      }

      const albums =  response.json();

      console.log(albums);
      albums.forEach( album => {
        console.log(album);
      })
    })

  } catch(e){
    console.error(e.message);
  }

}

console.log('jsonPlaceholder 앨범 데이터 가져오기 시작(Promise)');
fetchPromiseAlbumData();
