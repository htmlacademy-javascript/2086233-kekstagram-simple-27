import {POSTS_COUNT} from './data.js';
import {postsContent} from './data.js';

const picturesContainer = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content;
const template = templateFragment.querySelector('a');
const fragment = document.createDocumentFragment();

for (let i = 0; i < POSTS_COUNT; i++) {
  const photoPost = template.cloneNode(true); // Клонируем элемент со всеми "внутренностями"
  photoPost.classList.add('picture'); // Добавляем класс шаблону
  photoPost.children[0].src = postsContent[i]['url']; // Записываем url в атрибут src первого дочернего тега (img) c порядковым номером в адресе
  photoPost.children[1].querySelector('picture__likes').value = postsContent[i].likes; // Присваиваем число лайков и комментов в <span> внутри <p>
  photoPost.children[1].querySelector('picture__comments').value = postsContent[i].comments;
  fragment.appendChild(photoPost);
}

picturesContainer.appendChild(fragment);
