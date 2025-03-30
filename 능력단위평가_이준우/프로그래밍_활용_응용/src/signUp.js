window.addEventListener("DOMContentLoaded", () => {
  const loginId = document.getElementById('loginId');
  const loginPassword = document.getElementById('loginPassword');
  const loginButton = document.getElementById('loginButton');


  loginButton.addEventListener('click' , () => {
    let id = window.localStorage.getItem('userName');
    let password = window.localStorage.getItem('userPassword');

    if(id === loginId.value && password === loginPassword.value){
      alert('로그인 성공!!')
    } else{
      alert("로그인 실패!!")
    }
  })





})