const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector(".gallery");
const galleryItems = images.map(({ url, alt }) => {
  return `<li class="gallery__item"><img src="${url}" alt="${alt}" class="gallery__image"></li>`;
});

galleryList.insertAdjacentHTML("beforeend", galleryItems.join(""));

// Сначала мы находим элемент списка ul.gallery.
// Затем мы используем метод map() для создания массива новых элементов li, каждый из которых содержит вложенный элемент img.
// Мы используем деструктуризацию объектов для извлечения свойств url и alt из каждого объекта в массиве images.

// Для каждого объекта в массиве images мы создаем строку шаблона, в которой мы вставляем значения url и alt в качестве атрибутов для элемента img.
// Мы также добавляем классы gallery__item и gallery__image для соответствующих элементов li и img.

// Затем мы используем метод insertAdjacentHTML() для вставки всех новых элементов li в список ul.gallery одним вызовом.
// Мы передаем строку, содержащую все новые элементы li, в качестве аргумента для метода insertAdjacentHTML().
