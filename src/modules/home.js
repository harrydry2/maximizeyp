import { $, $$ } from "./bling";

function wideFunction() {
  var wideVar = 0;
  var prevVar = 0;

  const ulWide = $(".stories > ul");
  const next = $(".wide__handle-next");
  const prev = $(".wide__handle-prev");
  const wideRightArray = Array.from($$(".wide__right"));
  const wideImgArray = Array.from($$("figure > img"));
  var clicked = false;

  setInterval(() => {
    if (!clicked) {
      if (wideVar === 4) {
        prevVar = wideVar;
        wideVar = 0;
      } else {
        prevVar = wideVar;
        wideVar++;
      }
      wideFunc();
    }
    clicked = false;
  }, 4000);

  next.on("click", () => {
    clicked = true;
    if (wideVar === 4) {
      prevVar = wideVar;
      wideVar = 0;
    } else {
      prevVar = wideVar;
      wideVar++;
    }
    wideFunc(true);
  });

  prev.on("click", () => {
    clicked = true;
    if (wideVar === 0) {
      prevVar = wideVar;
      wideVar = 4;
    } else {
      prevVar = wideVar;
      wideVar--;
    }
    wideFunc(false);
  });

  function wideFunc(next) {
    ulWide.style.transform = `translateX(-${wideVar * 20}%)`;
    wideRightArray.forEach((wideRight, i) => {
      if (i === prevVar) {
        wideRight.classList.remove("wide__right-active");
        wideImgArray[i].classList.remove("wide__extra-active");
      }
      if (i === wideVar) {
        wideRight.classList.add("wide__right-active");
        wideImgArray[i].classList.add("wide__extra-active");
      }
    });
  }
}

export { wideFunction }
