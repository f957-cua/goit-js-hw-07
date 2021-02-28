/**
 * Напиши скрипт для создания галлереи изображений по массиву 
 * данных.

В HTML есть список ul#gallery.

<ul id="gallery"></ul>
Используй массив объектов images для создания тегов img вложенных 
в li. Для создания разметки используй шаблонные строки и 
insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию 
вставки.

Добавь минимальное оформление галереи флексбоксами или гридами 
через css-классы.
*/
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const insertGallery = document.querySelector('#gallery');

const makeEl = image => {
  const liEl = document.createElement('li');
  const imgEl = document.createElement('img');
  imgEl.src = image.url;
  imgEl.alt = image.alt;
  imgEl.width = 600;

  liEl.append(imgEl)

  return liEl.innerHTML
};
 
const makeGalleryEl = images.map(makeEl).join('');
console.dir(makeGalleryEl);


insertGallery.insertAdjacentHTML('afterbegin', makeGalleryEl);
