const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const inputLength = event.target.value.length;
  const requiredLength = Number(inputRef.getAttribute("data-length"));

  if (inputLength === requiredLength) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}

// В этом решении мы добавляем слушатель события blur на элемент inputRef.
// При срабатывании события, мы проверяем количество символов в inputRef, используя свойство value.length, и
// сравниваем его с необходимым количеством, хранящимся в атрибуте data - length.
// Затем мы добавляем или удаляем соответствующие CSS - классы, чтобы изменить цвет границы элемента inputRef.
