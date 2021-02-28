import carsArr from './data.js';

const listEl = document.createElement('ul');
listEl.classList.add('cars-list');

document.body.prepend(listEl);

const modalImgRef = document.querySelector('.modal-img');
const modalRef = document.querySelector('.modal');

  const markup = carsArr.map(({name, url, id, description}) => `<li><p>${name}</p><img src='${url}' alt='${description}' id='${id}' width='320'></img></li>`)
  .join(' ')
    
  listEl.insertAdjacentHTML('afterbegin', markup)

listEl.addEventListener('click', e => {
    console.log('privet');
    if (e.target.localName === 'img') {
        modalRef.style.display = 'block';
        modalImgRef.src = e.target.src
    }

})
  
modalRef.addEventListener('click', e => {
    console.log('privet');
    if (e.target.localName !== 'img') {
        modalRef.style.display = 'none';
        modalImgRef.src = '';
    }
    
})
  
window.addEventListener('keydown', e => {
    console.log(e.key);
    if (e.key === "Escape") {
        modalRef.style.display = 'none';
    }
});

const formRef = document.querySelector('.form');
const inputRef = document.querySelector('.input');
const filterRef = document.querySelector('.filter');
const btnRef = document.querySelector('.btn');
const listRef = document.querySelector('.list');


const arr = []

formRef.addEventListener('submit', e => { 
    e.preventDefault()
    arr.push(inputRef.value)
    listRef.innerHTML = '';

    const markup = arr.map(item => `<li><p>${item}</p></li>`)
        .join(' ')
    listRef.insertAdjacentHTML('beforeend', markup)
    inputRef.value = ''
})

console.log(arr);

filterRef.addEventListener('input', e => {

})