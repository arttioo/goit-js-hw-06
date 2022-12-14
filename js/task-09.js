const span = document.querySelector(".color");
const button = document.querySelector(".change-color");
const body = document.querySelector("body");

button.addEventListener("click", onButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onButtonClick(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
}
