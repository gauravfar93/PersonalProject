import navbar from "./components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

import footer from "./components/footer.js";

document.getElementById("footer").innerHTML = footer();

// total products
let mykey = JSON.parse(localStorage.getItem("cartProd")) || [];
let x = mykey.length;
document.querySelector("#thead").innerText = `My Cart (${x} Items)`;

let containers = document.getElementById("containers");
let myKey = JSON.parse(localStorage.getItem("cartProd")) || [];
function cartData() {
  containers.innerHTML = null;

  myKey.map(function (el, index) {
    let div = document.createElement("div");
    div.setAttribute("class", "manudiv");

    let image = document.createElement("img");
    image.src = el.imgUrl;

    let price = document.createElement("p");
    price.innerText = el.price;

    let title = document.createElement("p");
    title.innerText = el.title;

    let button = document.createElement("button");
    button.setAttribute("class", "remove_btn");
    button.innerText = "Remove";
    button.addEventListener("click", function () {
      removeitem(index);
    });
    div.append(image, title, price, button);
    containers.append(div);
  });
}
cartData();

function removeitem(index) {
  myKey.splice(index, 1);
  localStorage.setItem("cartProd", JSON.stringify(myKey));
  cartData();
  window.location.reload();
}

let total = 0;
let totalSum = document.getElementById("totalSum");
function grandTotal() {
  myKey.map(function (el) {
    total += Number(el.price);
  });
  return total;
}
// console.log("total", grandTotal());
grandTotal();
totalSum.innerText = total;

document.getElementById("manubtn").addEventListener("click", function () {
  window.location.href = "./index.html";
});


document.getElementById("manubtn1").addEventListener("click",function(){
    window.location.href="./delivery.html";
})