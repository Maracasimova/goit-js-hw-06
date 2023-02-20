const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value || !password.value) {
    alert("All fields must be filled!");
    return;
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);

  form.reset();
}