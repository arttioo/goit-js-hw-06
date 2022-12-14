const input = document.querySelector("#validation-input");
const validationLength = input.getAttribute("data-length");

input.addEventListener("blur", onBlurCheck);
function onBlurCheck(event) {
  if (input.value.length == validationLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
