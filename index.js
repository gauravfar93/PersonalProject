import navbar from "./components/navbar.js";
//console.log('navbar:', navbar);
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

import footer from "./components/footer.js";
//console.log('footer:', footer);
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

document
  .getElementById("mytheresa_logo2")
  .addEventListener("click", function () {
    window.location.href = "./mycart.html";
  });
