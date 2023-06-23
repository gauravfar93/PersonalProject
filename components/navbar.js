function navbar() {
  let user = JSON.parse(localStorage.getItem("user"));
  return `<div id="navbar1">
      <div id="left_part">
          <a href="./women.html"><p id="womenPage">WOMEN</p></a>
          <a href=./mens.html><p id="menPage">MEN</p></a>
          <a href=./baby.html><p id="kidPage">KIDS</p></a>
          <a href=""><p id="lifePage">LIFE</p></a>
      </div>
      <div id="right_part">
          <P id="newsletterPage">Signup for Newsletter</P>
          <a href="./account.html"><P id="accountPage"> My Account </P></a>
          <a href=./mycart.html><P id="whishlistPage">My wishlist ♡</P></a>
          <!-- <i class="fa-thin fa-heart"></i> -->
          <P>Lebanon | English</P>
      </div>
  </div>`;
}
export default navbar;
