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

// Мы начинаем с выбора формы с помощью метода document.querySelector.
// Затем мы добавляем обработчик события submit на форму с помощью метода addEventListener.

// Когда форма отправляется, сначала мы вызываем метод preventDefault() на объекте события, чтобы предотвратить перезагрузку страницы.

// Затем мы используем деструктуризацию объекта, чтобы получить доступ к элементам формы по их имени.
// Мы проверяем, заполнены ли оба поля, и если нет, выводим сообщение об ошибке и выходим из функции.

// Если оба поля заполнены, мы создаем объект formData, используя значения полей в качестве значений свойств объекта.
// Затем мы выводим объект formData в консоль и очищаем значения полей формы, вызывая метод reset() на форме.
