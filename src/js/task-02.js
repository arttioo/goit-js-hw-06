const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEL = ingredients.map(ingredient => {
  const createdLi = document.createElement("li");
  createdLi.textContent = ingredient;
  return createdLi;
});
const ingredientsUl = document.querySelector("#ingredients");
ingredientsUl.append(...ingredientsEL);
