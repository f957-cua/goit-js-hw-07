/**
 * Напиши скрипт, который бы при потере фокуса на 
 * инпуте, проверял его содержимое на правильное 
 * количество символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>

Сколько символов должно быть в инпуте, указывается 
в его атрибуте data-length.

    Если введено подходящее количество, то border 
инпута становится зеленым, если неправильное - красным.
    
    Для добавления стилей, используй CSS-классы 
valid и invalid.
 */

const inputEl = document.querySelector('#validation-input');
console.dir(inputEl)
inputEl.addEventListener('blur', checkedConditionInput);

function checkedConditionInput(event) {
    console.log(event.currentTarget.value.length);
    console.log(Number(event.currentTarget.dataset.length));
    const numberEl = event.currentTarget.value.length;
    const maxQuantityNumberEl = Number(event.currentTarget.dataset.length);

    if (maxQuantityNumberEl === numberEl) {
        if (inputEl.classList.contains('invalid')) {
            inputEl.classList.replace('invalid', 'valid')
        }
        inputEl.classList.add('valid');
    }
    else {
        if (inputEl.classList.contains('valid')) {
            inputEl.classList.replace('valid', 'invalid')
        }
        inputEl.classList.add('invalid')
    }
}
