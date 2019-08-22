import './sass/styles.sass';
import { $, $$ } from './modules/bling';
import "./modules/header";
import { wideFunction } from "./modules/home";
import { mailSubmitFromHome} from "./modules/eoSubmit";
import { mobileMenu } from "./modules/mobilemenu";

if ($(".home")) {
  wideFunction();
  mailSubmitFromHome();
  $(".video__subtitle1").on("click", () => {
    console.log("email")
    $(".p1video").muted = false
  })
}

if (window.innerWidth <= 1023) {
  mobileMenu();
}
