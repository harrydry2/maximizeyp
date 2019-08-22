import './sass/styles.sass';
import { $, $$ } from './modules/bling';
import "./modules/header";
import { wideFunction } from "./modules/home";
import { mailSubmitFromHome} from "./modules/eoSubmit";
import { mobileMenu } from "./modules/mobilemenu";

if ($(".home")) {
  wideFunction();
  mailSubmitFromHome();
  $(".video__subtitle").on("click", () => {
    if ($(".p1video").muted === true) {
      $(".p1video").muted = false
    } else {
      $(".p1video").muted = true
    }
  })
  const button = $(".zenscroll");
  const git = $(".gitOuter");
  button.on("click", () => {
    git.scrollIntoView({behavior: "smooth"});
  });
}

if (window.innerWidth <= 1023) {
  mobileMenu();
}
