const itemsByTagName = document.querySelectorAll(".item");

const itemsLength = itemsByTagName.length;
console.log("Number of categories:", itemsLength);
itemsByTagName.forEach(item => {
  const title = item.querySelector("h2");
  console.log("Category:", title.textContent);
  const elementsList = item.querySelectorAll("li");
  console.log("Elements:", elementsList.length);
});
