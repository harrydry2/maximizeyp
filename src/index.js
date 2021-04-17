import "./sass/styles.sass";
import { $, $$ } from "./modules/bling";
import "./modules/header";
import { wideFunction } from "./modules/home";
import { mailSubmitFromHome } from "./modules/eoSubmit";
import { mobileMenu } from "./modules/mobilemenu";

if ($(".homeJS")) {
  wideFunction();
  mailSubmitFromHome();
  $(".video__subtitle").on("click", () => {
    if ($(".p1video").muted === true) {
      $(".p1video").muted = false;
    } else {
      $(".p1video").muted = true;
    }
  });
  const button = $(".zenscroll");
  const git = $(".gitOuter");
  button.on("click", () => {
    git.scrollIntoView({ behavior: "smooth" });
  });
}

if ($(".offerJS")) {
  mailSubmitFromHome();
  $(".video__subtitle").on("click", () => {
    if ($(".p1video").muted === true) {
      $(".p1video").muted = false;
    } else {
      $(".p1video").muted = true;
    }
  });
  const button = $(".zenscrollOffer");
  const git = $(".gitOuter");
  button.on("click", () => {
    git.scrollIntoView({ behavior: "smooth" });
  });
}

if ($(".parentsJS")) {
  mailSubmitFromHome();
  // $(".video__subtitle").on("click", () => {
  //   if ($(".p1video").muted === true) {
  //     $(".p1video").muted = false;
  //   } else {
  //     $(".p1video").muted = true;
  //   }
  // });
  const button = $(".zenscroll");
  const button1 = $(".zenscrollParents");
  const git = $(".gitOuter");
  button.on("click", () => {
    git.scrollIntoView({ behavior: "smooth" });
  });
  button1.on("click", () => {
    git.scrollIntoView({ behavior: "smooth" });
  });
}

if (!$(".offerJS")) {
  if (window.innerWidth <= 1023) {
    mobileMenu();
  }
}
