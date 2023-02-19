const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  output.textContent = event.target.value.trim() || "Anonymous";
});

// Сначала мы находим инпут и спан в DOM с помощью метода querySelector.
// Затем мы добавляем слушатель события 'input' на инпут.
// Каждый раз, когда пользователь вводит текст в инпут,
//     мы обновляем содержимое спана текстом из инпута, если инпут не пустой, или строкой 'Anonymous', если инпут пустой.
