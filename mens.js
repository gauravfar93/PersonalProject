import navbar from "./components/navbar.js";
// console.log(navbar);

let navbar_div = document.getElementById("navbar");

navbar_div.innerHTML = navbar();

//--------- footrr import ----
import footer from "./components/footer.js";
//console.log('footer:', footer);
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

//---------slider carousel-----

let slidesContainerA = document.getElementById("slides-containerA");
let slideA = document.querySelector(".slideA");
let prevButtonA = document.getElementById("slide-arrow-prevA");
let nextButtonA = document.getElementById("slide-arrow-nextA");

nextButtonA.addEventListener("click", () => {
  let slideWidth = slideA.clientWidth;
  slidesContainerA.scrollLeft += slideWidth;
});

prevButtonA.addEventListener("click", () => {
  let slideWidth = slideA.clientWidth;
  slidesContainerA.scrollLeft -= slideWidth;
});

let slidesContainerB = document.getElementById("slides-containerB");
let slideB = document.querySelector(".slideB");
let prevButtonB = document.getElementById("slide-arrow-prevB");
let nextButtonB = document.getElementById("slide-arrow-nextB");

nextButtonB.addEventListener("click", () => {
  let slideWidth = slideB.clientWidth;
  slidesContainerB.scrollLeft += slideWidth;
});

prevButtonB.addEventListener("click", () => {
  let slideWidth = slideB.clientWidth;
  slidesContainerB.scrollLeft -= slideWidth;
});

let slidesContainerC = document.getElementById("slides-containerC");
let slideC = document.querySelector(".slideC");
let prevButtonC = document.getElementById("slide-arrow-prevC");
let nextButtonC = document.getElementById("slide-arrow-nextC");

nextButtonC.addEventListener("click", () => {
  let slideWidth = slideC.clientWidth;
  slidesContainerC.scrollLeft += slideWidth;
});

prevButtonC.addEventListener("click", () => {
  let slideWidth = slideC.clientWidth;
  slidesContainerC.scrollLeft -= slideWidth;
});

document.getElementById("womenPage").addEventListener("click",function(){
  document.location.href = "women.html"
})
document.getElementById("menPage").addEventListener("click",function(){
  window.location.href = "mens.html"
})
document.getElementById("kidPage").addEventListener("click",function(){
  window.location.href = "kids.html"
})
document.getElementById("newsletterPage").addEventListener("click",function(){
  window.location.href = "newsletter.html"
})
document.getElementById("accountPage").addEventListener("click",function(){
  window.location.href = "account.html"
})

document.getElementById("mytheresa_logo2").addEventListener("click", function(){
  window.location.href = "myCart.html"
})

document.getElementById("mytheresa_logo").addEventListener("click", function(){
  window.location.href = "index.html"
})