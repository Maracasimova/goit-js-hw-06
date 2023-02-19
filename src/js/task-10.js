const inputEl = document.querySelector("#controls input");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

createBtnEl.addEventListener("click", createBoxes);
destroyBtnEl.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = inputEl.value;
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.width = `${30 + i * 10}px`;
    boxEl.style.height = `${30 + i * 10}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxes.push(boxEl);
  }

  boxesEl.append(...boxes);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Обработчик нажатия на кнопку создания создает массив из элементов div, задает им ширину,
//   высоту и цвет фона, и затем добавляет все элементы массива в контейнер div#boxes.
//   Обработчик нажатия на кнопку удаления очищает содержимое контейнера div#boxes.
// Функция getRandomHexColor возвращает случайный цвет в формате HEX.
