const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
  text.style.fontSize = `${fontSizeControl.value}px`;
});

// В этом решении мы находим элементы на странице с помощью метода document.querySelector().
// Затем добавляем слушатель события input на ползунок #font - size - control.
// Когда значение ползунка изменяется, мы обновляем размер шрифта элемента #text, устанавливая значение его инлайн - стиля fontSize.
//  Обратите внимание, что значение fontSizeControl.value является строкой, поэтому мы преобразуем его в число, добавив px в конец.
