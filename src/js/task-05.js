const input = document.querySelector("input");
const userName = document.querySelector("#name-output");
input.addEventListener("input", onInputChange);
function onInputChange(event) {
  const inputValue = event.currentTarget.value;
  userName.textContent = inputValue.length === 0 ? "Anonymous" : inputValue;
}


