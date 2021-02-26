/**
 * В HTML есть пустой список 
 * 
 *   ul#ingredients.

<ul id="ingredients"></ul>

В JS есть массив строк.
*/
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
/*
Напиши скрипт, который для каждого элемента массива ingredients 
создаст отдельный li, после чего вставит все li за одну операцию 
в список ul.ingredients. Для создания DOM-узлов используй 
document.createElement().
 */

const placeForIngredients = document.querySelector('#ingredients');
// console.log(placeForIngredients);

//----for------------
// const elements = [];

// for (let i = 0; i < ingredients.length; i++) {
//     const ingredient = ingredients[i];
//     const ingredientEl = document.createElement('li');
//     ingredientEl.textContent = ingredient;

//     elements.push(ingredientEl);
//     // console.log(ingredientEl);
// }


//-----map-----------
const elements = ingredients.map(ingredient => {
    const ingredientEl = document.createElement('li');
    ingredientEl.textContent = ingredient;

    return ingredientEl;
});

placeForIngredients.append(...elements);