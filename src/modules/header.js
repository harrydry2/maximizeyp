import { $, $$ } from "./bling";

const header = $(".header");
const headerInner = $(".header__inner");

window.on("scroll", headerScroll);

function headerScroll() {
  if (window.scrollY > 20) {
    header.classList.add("headerScroll");
    headerInner.classList.add("headerScrollInner");
  }
  if (window.scrollY < 20 && header.classList.contains("headerScroll")) {
    header.classList.remove("headerScroll");
    headerInner.classList.remove("headerScrollInner");
  }
}