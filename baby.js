let babyData = [
  {
    imgUrl:
      "https://img.mytheresa.com/2176/2176/90/jpeg/catalog/product/1a/P00719705.jpg",
    hovimg:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/1a/P00719705_b1.jpg",
    title: "THE ANIMALS OBSERVATORY",
    price: "55",
  },
  {
    imgUrl:
      "https://img.mytheresa.com/2176/2176/90/jpeg/catalog/product/cf/P00717293.jpg",
    hovimg:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/cf/P00717293_d2.jpg",
    title: "OFF-WHITE KIDS",
    price: "549",
  },
  {
    imgUrl:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/c2/P00708497.jpg",
    hovimg:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/c2/P00708497_b1.jpg",
    title: "MONCLER ENFANT",
    price: "119",
  },
  {
    imgUrl:
      "https://img.mytheresa.com/2176/2176/90/jpeg/catalog/product/3a/P00708490.jpg",
    hovimg:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/3a/P00708490_b1.jpg",
    title: "MONCLER ENFANT",
    price: "415",
  },
  {
    imgUrl:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/9a/P00687677.jpg",
    hovimg:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/9a/P00687677_b1.jpg",
    title: "STELLA MCCARTNEY KIDS",
    price: "79",
  },
  {
    imgUrl:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/72/P00687872.jpg",
    hovimg:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/72/P00687872_b1.jpg",
    title: "STELLA MCCARTNEY KIDS",
    price: "115",
  },
  {
    imgUrl:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/92/P00687839.jpg",
    hovimg:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/92/P00687839_b1.jpg",
    title: "STELLA MCCARTNEY KIDS",
    price: "135",
  },
  {
    imgUrl:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/91/P00722689.jpg",
    hovimg:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/91/P00722689_b1.jpg",
    title: "BURBERRY KIDS",
    price: "395",
  },
  {
    imgUrl:
      "https://img.mytheresa.com/2176/2176/90/jpeg/catalog/product/56/P00715757.jpg",
    hovimg:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/56/P00715757_b1.jpg",
    title: "BONPOINT",
    price: "155",
  },
  {
    imgUrl:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/7b/P00719906.jpg",
    hovimg:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/7b/P00719906_b1.jpg",
    title: "TARTINE ET CHOCOLAT",
    price: "75",
  },
  {
    imgUrl:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/6b/P00696327.jpg",
    hovimg:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/6b/P00696327_b1.jpg",
    title: "BOBO CHOSES",
    price: "119",
  },
  {
    imgUrl:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/5c/P00717933.jpg",
    hovimg:
      "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/5c/P00717933_b1.jpg",
    title: "CARAMEL",
    price: "39",
  },
];
let data = babyData;
let container = document.getElementById("container");
// container.innerHtml = null;
function appendData() {
  let cartArr = JSON.parse(localStorage.getItem("cartProd")) || [];
  container.innerHTML = null;
  data.map(function (el) {
    let box = document.createElement("div");

    let title = document.createElement("p");
    title.innerText = el.title;

    let image = document.createElement("img");
    image.src = el.imgUrl;
    image.id = "img";
    image.addEventListener("mouseover", changeimage);
    image.addEventListener("mouseout", returnimage);

    let price = document.createElement("p");
    price.innerText = `€ ${el.price}`;

    let btn = document.createElement("button");
    btn.innerText = "Add to Cart";
    btn.id = "cartBtn";
    btn.addEventListener("click", function () {
      cartArr.push(el);
      localStorage.setItem("cartProd", JSON.stringify(cartArr));
    });

    box.append(image, title, price, btn);
    container.append(box);
    console.log(container);

    function changeimage() {
      image.setAttribute("src", el.hovimg);
    }
    function returnimage() {
      image.setAttribute("src", el.imgUrl);
    }
  });
}
appendData();

document.querySelector("#sort").addEventListener("change", function () {
  sortData();
});

function sortData() {
  let selected = document.querySelector("#sort").value;
  if (selected === "Ascending") {
    data = data.sort(function (a, b) {
      return parseFloat(a.price) - parseFloat(b.price);
    });
    appendData(data, container);
  } else if (selected === "Descending") {
    data = data.sort(function (a, b) {
      return parseFloat(b.price) - parseFloat(a.price);
    });
    appendData(data, container);
  }
}
document
  .getElementById("mytheresa_logo")
  .addEventListener("click", function () {
    window.location.href = "index.html";
  });

 document.getElementById("mytheresa_logo2").addEventListener("click",function(){
    window.location.href = "./mycart.html";
 }) 

import navbar from "./components/navbar.js";
// console.log(navbar);

let navbar_div = document.getElementById("navbar");

navbar_div.innerHTML = navbar();

//--------- fotter import ----
import footer from "./components/footer.js";
//console.log('footer:', footer);
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();
