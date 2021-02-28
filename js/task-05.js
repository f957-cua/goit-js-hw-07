/**
 * Напиши скрипт который, при наборе текста в инпуте 
 * input#name-input (событие input), подставляет его текущее 
 * значение в span#name-output. 
 * 
 * Если инпут пустой, в спане должна отображаться строка 
 * 'незнакомец'.
 */

const refs = {
    inputEl: document.querySelector('#name-input'),
    outputEl: document.querySelector('#name-output'),
}

// const inputEl = document.querySelector('#name-input');
// const outputEl = document.querySelector('#name-output');

refs.inputEl.addEventListener('input', onInputChange);

console.dir(refs.outputEl);

function onInputChange(event) {

    console.log(event.currentTarget);
    if (event.currentTarget.value !== "") {
        refs.outputEl.textContent = event.currentTarget.value
    }
    else {
        refs.outputEl.textContent = 'незнакомец';
    }
};
