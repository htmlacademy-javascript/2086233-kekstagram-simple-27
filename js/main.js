import './scale-editing.js';
import './effect-editing.js';
import {getData} from './load.js';
import {generatePhotos} from './photos-generation.js';
import {setUserFormSubmit} from './comment-validation.js';

getData(
  (photos) => generatePhotos(photos), // при успехе генерируем изображения
);

const selectImageForm = document.querySelector('#upload-select-image');
selectImageForm.addEventListener('submit', setUserFormSubmit);

//Импорты других модулей, Вызовы общих функций, Настройка скриптов..
