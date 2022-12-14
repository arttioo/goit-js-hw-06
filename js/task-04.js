const span = document.querySelector("#value");
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;
const increment = () => {
  counterValue += 1;
  span.textContent = counterValue;
};

incrementBtn.addEventListener("click", increment);

const decrement = () => {
  counterValue -= 1;
  span.textContent = counterValue;
};
decrementBtn.addEventListener("click", decrement);
