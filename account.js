import navbar from "./components/navbar.js";

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

import footer from "./components/footer.js";

let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();
let arr = [];
document.querySelector("#signupbtn").addEventListener("click", Signup_Func);

function Signup_Func() {
  // console.log("hello");
  let form = document.getElementById("form");
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  if (password === confirmPassword) {
    let obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    arr.push(obj);
    localStorage.setItem("arr", JSON.stringify(arr));
    alert("user registered succesfully");
  }
}

document.querySelector("#loginbtn").addEventListener("click", login_Func);

function login_Func() {
  // console.log("login")
  let email_address = document.getElementById("email1").value;
  let pass = document.getElementById("password1").value;
  let get = JSON.parse(localStorage.getItem("arr"));
  //  console.log(get)
  get.map(function (el) {
    if (el.email == email_address && el.password == pass) {
      localStorage.setItem("user", JSON.stringify(el));
      alert("login Succesfull");
      window.location.href = "index.html";
    } else {
      alert("invalid user name or password");
    }
  });
}

document
  .getElementById("mytheresa_logo")
  .addEventListener("click", function () {
    window.location.href = "index.html";
  });

// document.querySelector("#signupbtn").addEventListener("click",signupbtn)

// function signupbtn(){
//     let fname = document.getElementById("fname").value;
//     localStorage.setItem("fname",fname)
//     let lname = document.getElementById("lname").value;
//     localStorage.setItem("lname",lname)
//     let email = document.getElementById("email").value;
//     localStorage.setItem("email",email)
//     let pass = document.getElementById("password").value;
//     let cinfPass = document.getElementById("confirmPass").value;
//     if(pass===cinfPass){
//         localStorage.setItem("pass",pass)
//         alert("Registered Successfully")
//     }else{
//         document.getElementById("notmatch").innerText = "Password don't Match"
//     }

// }

// document.querySelector("#loginbtn").addEventListener("click", loginbtn)

// function loginbtn(){
//     let loginEmail = document.querySelector("#email").value;
//     // localStorage.setItem("loginEmail",loginEmail)
//     let loginPass = document.querySelector("#password").value;
//     // localStorage.setItem("loginPass",loginPass)

//     let storeEmail = localStorage.getItem("email")
//     let storePass = localStorage.getItem("pass")

//     if(loginEmail === storeEmail && loginPass === storePass){
//          alert("Login Successful")
//          window.location.href = "index.html"
//     }else{
//         alert("Incorrect Password or email")
//     }
// }

// document.getElementById("womenPage").addEventListener("click",function(){
//     document.location.href = "women.html"
//   })
//   document.getElementById("menPage").addEventListener("click",function(){
//     window.location.href = "mens.html"
//   })
//   document.getElementById("kidPage").addEventListener("click",function(){
//     window.location.href = "kids.html"
//   })
//   document.getElementById("newsletterPage").addEventListener("click",function(){
//     window.location.href = "newsletter.html"
//   })
//   document.getElementById("accountPage").addEventListener("click",function(){
//     window.location.href = "account.html"
//   })

//   document.getElementById("mytheresa_logo2").addEventListener("click", function(){
//     window.location.href = "myCart.html"
//   })

//   document.getElementById("mytheresa_logo").addEventListener("click", function(){
//     window.location.href = "index.html"
//   })
