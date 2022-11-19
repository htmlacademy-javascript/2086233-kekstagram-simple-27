import {setUserFormSubmit} from './comment-validation.js';
import {closeEditPhoto} from './form-popup.js';
import './scale-editing.js';
import './effect-editing.js';
import {getData} from './load.js';
import {generatePhotos} from './photos-generation.js';
import {showAlert} from './utils.js';

getData(
  (photos) => generatePhotos(photos), // при успехе генерируем изображения
  showAlert // при ошибке показать уведомление
);
setUserFormSubmit(closeEditPhoto);

//Импорты других модулей, Вызовы общих функций, Настройка скриптов..
