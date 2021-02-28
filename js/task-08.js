/*
Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input и 
нажимает кнопку Создать, после чего рендерится коллекция. 

При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр 
amount - число. Функция создает столько div, сколько указано 
в amount и добавляет их в div#boxes.

Каждый созданный div:

 - Имеет случайный rgb цвет фона
 - Размеры самого первого div - 30px на 30px
 - Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
 - Создай функцию destroyBoxes(), которая очищает div#boxes.
*/

const refs = {
    inputEl: document.querySelector('input'),
    boxesEl: document.querySelector('#boxes'),
    btnRenderEl: document.querySelector('button[data-action="render"]'),
    btnDestroyEl: document.querySelector('button[data-action="destroy"]'),
}

let amount

function createBoxes(event) {
    const newDiv = document.createElement('div');

    for (let i = 0; i < amount; i++) {
        const nextDiv = document.createElement('div');

        let width = 30 + 10*i;
        let height = 30 + 10*i;

        const a = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const c = Math.floor(Math.random() * 256);

        const color = `rgb(${a}, ${b}, ${c})`;   

        nextDiv.style.width = `${width}px`;
        nextDiv.style.height = `${height}px`;
        nextDiv.style.backgroundColor = color;

        newDiv.append(nextDiv); 
    }
    refs.boxesEl.append(newDiv)
};

refs.btnRenderEl.addEventListener('click', () => {
    amount = Number(refs.inputEl.value);
    console.log(amount);
    createBoxes()
});

refs.btnDestroyEl.addEventListener('click', removeBoxes)

function removeBoxes() {
    refs.boxesEl.innerHTML = '';
};

// const refs = {
// inputEl: document.querySelector("input"),
// boxesEl: document.querySelector("#boxes"),
// btnRenderEl: document.querySelector('button[data-action="render"]'),
// btnDestroyEl: document.querySelector('button[data-action="destroy"]'),
// };

// const createColor = () => {
// const a = Math.floor(Math.random() * 256);
// const b = Math.floor(Math.random() * 256);
// const c = Math.floor(Math.random() * 256);

// return `rgb(${a}, ${b}, ${c})`;
// };

// function createBoxe(height, width) {
// const newDiv = document.createElement("div");

// newDiv.style.width = `${width}px`;
// newDiv.style.height = `${height}px`;
// newDiv.style.backgroundColor = createColor();
// return newDiv;
// }

// const createBoxes = (amount) => {
// let arr = [];
// let size = 30;
// for (let i = 0; i < amount; i++) {
// arr.push(createBoxe(size, size));
// size += 10;
// }
// return arr;
// };

// const updateBox = (newDivs) => {
// refs.boxesEl.innerHTML = " ";
// refs.boxesEl.append(...newDivs);
// };

// refs.btnRenderEl.addEventListener("click", () => {
// amount = +refs.inputEl.value;
// let items = createBoxes(amount);
// updateBox(items);
// });
