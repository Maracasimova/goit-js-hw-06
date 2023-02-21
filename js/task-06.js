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