/**
 * Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий 
в ul#categories, то есть элементов li.item. 
Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, 
найдет и выведет в консоль текст заголовка элемента 
(тега h2) и количество элементов в категории 
(всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4
 */

const ulEl = document.querySelector('#categories');

const categoryEl = ulEl.children

const firstResult = `В списке ${categoryEl.length} категории.`

console.log(firstResult);

//=============================================================

const categoryNamesEl = document.querySelectorAll(".item h2")

const resTask = [...categoryNamesEl];

const resume = resTask.map(el => {
    const textNames = `Категория: ${el.textContent}`;
    const textQuantity = `Количество элементов: ${el.parentNode.lastElementChild.children.length}`;

    return console.log(textNames, textQuantity);
})

