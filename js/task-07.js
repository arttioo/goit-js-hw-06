const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", onChangeText);
function onChangeText(event) {
  const inputValue = event.currentTarget.value;
  text.style.fontSize = `${inputValue}px`;
  
}
