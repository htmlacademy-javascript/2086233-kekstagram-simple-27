import {POSTS_COUNT, postsContent} from './data.js';
import {getData} from './load.js';

const picturesContainer = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content;
const template = templateFragment.querySelector('a');


const loadPhotos = getData(console.log, console.error);
loadPhotos();
const generatePhotos = (content) => {
  const fragment = document.createDocumentFragment();
  content.forEach((url, likes, comments) => {
    const photoPost = template.cloneNode(true); // Клонируем элемент со всеми "внутренностями"
    photoPost.classList.add('picture'); // Добавляем класс шаблону
    photoPost.querySelector('.picture__img').src = url; // Записываем url в атрибут src первого дочернего тега (img) c порядковым номером в адресе
    photoPost.querySelector('.picture__likes').value = likes; // Присваиваем число лайков и комментов в <span> внутри <p>
    photoPost.querySelector('.picture__comments').value = comments;
    fragment.appendChild(photoPost);
  });
  picturesContainer.appendChild(fragment);
};

