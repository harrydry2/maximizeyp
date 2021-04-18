import { $, $$ } from "./bling";
import axios from "axios";

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// inputName,

function submitMail(button, inputEmail, inputSchool, inputDesc, red) {
  button.on("click", async e => {
    e.preventDefault();
    red.style.display = "block";
    if (validateEmail(inputEmail.value)) {
      const { data } = await axios.post("/api/subscribe", {
        // name: inputName.value,
        email: inputEmail.value,
        school: inputSchool.value,
        desc: inputDesc.value
      });
      if (data.email === "true") {
        window.location.href =
          "https://www.maximizeyourpotential.co.uk/thank-you";
        red.style.color = "#00c26e";
        red.innerText = `We'll be in touch within 24hrs`;
        red.classList.add("gta__1");
      }
    } else {
      red.style.color = "#D0021B";
      red.innerText = "Not a valid email. Try again.";
    }
    inputEmail.value = "";
    inputSchool.value = "";
    inputDesc.value = "";
    // inputName.value = "";
  });
}

export function mailSubmitFromHome() {
  const button = $(".eoSubmit");
  const inputEmail = $(".inputEmail");
  const inputSchool = $(".inputSchool");
  // const inputName = $(".inputName");
  const inputDesc = $(".inputDesc");
  const red = $(".git__submit-red");
  submitMail(button, inputEmail, inputSchool, inputDesc, red);
  // submitMail(button, inputName, inputEmail, inputSchool, inputDesc, red);
}
