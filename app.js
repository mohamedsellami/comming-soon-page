const button = document.querySelector(".submit");
const emailInput = document.querySelector(".email-input");

button.addEventListener("click", checkEmail);
function checkEmail() {
  const regax = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailInput.style.cssText != "border: 3px solid rgb(249, 98, 98);") {
    if (emailInput.value == "") {
      emailInput.style.border = "3px solid hsl(0, 93%, 68%)";
      emailInput.insertAdjacentHTML(
        "afterend",
        `
    <img class="error" src="./images/icon-error.svg" alt="error" />
    `
      );
      button.insertAdjacentHTML(
        "afterend",
        `
    <p class="worning">Please enter your email</p>
    `
      );
    } else if (emailInput.value != "" && !regax.test(emailInput.value)) {
      emailInput.style.border = "3px solid hsl(0, 93%, 68%)";
      emailInput.insertAdjacentHTML(
        "afterend",
        `
    <img class="error" src="./images/icon-error.svg" alt="error" />
    `
      );
      button.insertAdjacentHTML(
        "afterend",
        `
    <p class="worning">Please enter a valid email</p>
    `
      );
    }
  }
}
emailInput.addEventListener("focus", clear);
function clear() {
  if (emailInput.style.cssText == "border: 3px solid rgb(249, 98, 98);") {
    document.querySelector(".email .error").remove();
    document.querySelector(".email .worning").remove();
    emailInput.style.border = "1px solid lightgray";
  }
}
