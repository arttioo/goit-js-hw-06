const form = document.querySelector("form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  const formData = {
    mail,
    password,
  };
  console.log(formElements);
  if (mail == 0 || password == 0) {
    alert("all fields must be filled");
  } else {
    console.log(formData);
  }
  form.reset();
}
