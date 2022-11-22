import {closeEditPhoto, onPopupEscKeydown} from './form-popup.js';

const MIN_LENGTH = 20;
const MAX_LENGTH = 140;
const ERR_MSG = 'Слишком короткий комментарий!';
const POSTS_COUNT = 25;

function getRandomInteger(firstNumber, secondNumber) {
  if (firstNumber < 0 || secondNumber < 0) {
    return NaN; }
  else if (firstNumber > secondNumber) {
    const swap = firstNumber;
    firstNumber = secondNumber;
    secondNumber = swap;
  }
  firstNumber = Math.ceil(firstNumber);
  secondNumber = Math.floor(secondNumber);
  return Math.floor(Math.random() * (secondNumber - firstNumber + 1)) + firstNumber;
}

/* Функция для проверки максимальной длины строки.
(с использованием ресурса - https://learn.javascript.ru/task/truncate)*/

function checkLength(string) {
  if (string.length < MIN_LENGTH) {
    throw Error(ERR_MSG);
  }
  return (string.length > MAX_LENGTH) ?
    `${string.slice(0, MAX_LENGTH - 1)}…` : string;
}

//Функции проверки клавиатуры
const isEscapeKey = (evt) => evt.key === 'Escape';
//Функции всплывающего сообщения
const body = document.querySelector('body');

const showMessage = (status) => {
  const templateFragment = document.querySelector(`#${status}`).content;
  const template = templateFragment.querySelector(`.${status}`);
  const fragment = document.createDocumentFragment();
  const post = template.cloneNode(true);
  post.classList.add(`${status}`);
  fragment.appendChild(post);
  body.appendChild(fragment);

  const button = document.querySelector(`.${status}__button`);

  const onSomeAreaClick = (evt) => {
    //объявляю функцию внутри, чтобы потом можно было ее удалить и можно было иметь доступ к status
    if (!evt.target.closest(`.${status}__inner`)) {
      //чтобы функция сработала вне зоны плашки сообщения
      closeMessage(status);
      document.removeEventListener('click', onSomeAreaClick);
    }
  };
  button.addEventListener('click', () => {
    closeMessage(status);
    document.removeEventListener('click', onSomeAreaClick);
  });
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onSomeAreaClick);
};

function closeMessage(status) {
  body.removeChild(document.querySelector(`.${status}`));
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', closeMessage);
  if (status === 'success') {
    closeEditPhoto();
  }
}

const showAlert = () => { showMessage('error'); };
const showSuccess = () => { showMessage('success'); };

export {getRandomInteger, checkLength, isEscapeKey, showAlert, showSuccess, POSTS_COUNT};
