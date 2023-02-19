const button = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const body = document.body;

function changeColor() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorSpan.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener("click", changeColor);

// Этот скрипт добавляет слушатель событий на кнопку, который вызывает функцию changeColor при клике.
// Функция changeColor генерирует случайный цвет и устанавливает его как цвет фона body, а также выводит его значение в span.
// Функция getRandomHexColor генерирует случайный шестнадцатеричный цвет в формате #RRGGBB.
