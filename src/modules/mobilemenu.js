import { $, $$ } from "./bling";

function mobileMenu() {
  console.log("beans")
  const mobileMenuOpen = $(".header__menu");
  const mobileMenu = $(".mMenu");
  const mobileCross = $(".mMenu__cross");
  console.log(mobileMenuOpen, mobileMenu, mobileCross)
  const flipPhone = Array.from($$(".flipPhone"));

  flipPhone.forEach(flip => {
    flip.on("click", () => {
      mobileMenu.classList.remove("mMenu__active");
      $("body").classList.remove("noScroll");
      $("html").classList.remove("noScroll");
    });
  });

  mobileMenuOpen.on("click", () => {
    mobileMenu.classList.add("mMenu__active");
    $("body").classList.add("noScroll");
    $("html").classList.add("noScroll");
  });

  mobileCross.on("click", () => {
    mobileMenu.classList.remove("mMenu__active");
    $("body").classList.remove("noScroll");
    $("html").classList.remove("noScroll");
  });
}

export {mobileMenu};