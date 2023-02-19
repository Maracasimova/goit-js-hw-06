const counterValue = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let value = 0;

incrementBtn.addEventListener("click", () => {
  value += 1;
  counterValue.textContent = value;
});

decrementBtn.addEventListener("click", () => {
  value -= 1;
  counterValue.textContent = value;
});

// В этом коде мы находим элементы кнопок и спана, используя метод querySelector.
// Далее мы создаем переменную value, которая будет использоваться для хранения текущего значения счетчика.

// Затем мы добавляем слушатели событий click для кнопок увеличения и уменьшения счетчика.
// Каждый раз, когда пользователь нажимает на одну из кнопок, мы увеличиваем или уменьшаем переменную value на 1,
//     а затем обновляем текстовое содержимое спана с помощью свойства textContent.
