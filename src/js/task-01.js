const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});

//Сначала мы находим элемент ul#categories и получаем все его дочерние элементы с классом item. 
//Затем мы выводим количество элементов li.item в списке ul#categories.

// Для каждого элемента li.item мы находим заголовок элемента h2 и количество вложенных элементов li внутри него. 
//Затем мы выводим текст заголовка и количество элементов в категории в консоль.
