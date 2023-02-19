const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientsItems = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  return item;
});

ingredientsList.append(...ingredientsItems);

// Сначала мы находим элемент ul#ingredients. 
// Затем мы используем метод map() для создания массива новых элементов li на основе массива строк ingredients.
// Для каждого ингредиента мы создаем новый элемент li, добавляем его текстовое содержимое и класс item.

// Затем мы используем метод append() для вставки всех новых элементов li одним вызовом в список ul#ingredients. 
// Мы передаем оператор расширения spread operator(троеточие перед массивом) в качестве аргумента для метода append(), 
// чтобы добавить каждый элемент массива ingredientsItems в качестве отдельного аргумента.