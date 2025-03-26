window.addEventListener('DOMContentLoaded', () => {
  const regisetrId = document.getElementById("registerId");
  const registerPassword = document.getElementById("registerPassword");
  const registerButton = document.querySelector("#registerButton");
  
    
    registerButton.addEventListener("click", () => {
    window.localStorage.setItem("userName", regisetrId.value );
    window.localStorage.setItem ("userPassword",registerPassword.value);
    
    let id = window.localStorage.getItem("userName");
    let password = window.localStorage.getItem("userPassword");

  
    if(id && password){
      window.location.href = "login.html"
      alert("회원가입 완료!! 로그인 페이지로 이동합니다!");

    } else{
      alert("회원가입이 제대로 이루어지지 않았습니다.");
    
    }
    
  });


  














})