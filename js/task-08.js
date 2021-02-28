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
    let width = 30;
    let height = 30;

    const a = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const c = Math.floor(Math.random() * 256);
    
    console.log(a, b, c);

    const color = `rgb(${a}, ${b}, ${c})`;   
    
    newDiv.style.width = `${width}px`;
    newDiv.style.height = `${height}px`;
    newDiv.style.backgroundColor = color;
  
    refs.boxesEl.append(newDiv)

};

refs.btnRenderEl.addEventListener('click', () => {
    console.log("Вешаю слушателя на инпут");
    amount = Number(refs.inputEl.value);
    console.log(amount);
    createBoxes()
})























// let amount = 0;

// function onInputValue(event) {
//     amount = Number(event.currentTarget.value);
//     console.log(amount);
//     return amount
// }

// refs.inputEl.addEventListener('input', onInputValue);
// console.log(amount);

// refs.btnRenderEl.addEventListener('click', () => createBoxes(amount))


// function createBoxes() {
//     const box = document.createElement('div');
//     let width = 30;
//     let height = 30;
//     box.style.width = `${width}px`;
//     box.style.height = `${height}px`;
//     let x = Math.floor(Math.random() * 256);
//     let y = Math.floor(Math.random() * 256);
//     let z = Math.floor(Math.random() * 256);
//     box.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
//     if (amount === 1) {
//         refs.boxesEl.append(box);
//     };
//     if (amount >= 1) {
//         for (let i = 1; i <= amount; i += 1) {
//             width += 10;
//             height += 10;
//             refs.boxesEl.append(box);
//         }
//     };
// };

// function removeBoxes() {
//     refs.boxesEl.remove();
// };

