import {closeEditPhoto, onPopupEscKeydown} from './form-popup.js';

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

const MIN_LENGTH = 20;
const MAX_LENGTH = 140;
const errMsg = 'Слишком короткий комментарий!';

function checkLength(string) {
  if (string.length < MIN_LENGTH) {
    throw Error(errMsg);
  }
  return (string.length > MAX_LENGTH) ?
    `${string.slice(0, MAX_LENGTH - 1)}…` : string;
}

//Функции проверки клавиатуры
const isEscapeKey = (evt) => evt.key === 'Escape';
const body = document.querySelector('body');

const closeMessage = (status) => {
  body.removeChild(document.querySelector(`.${status}`));
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('keydown', closeMessage);
  if (status === 'success') {
    closeEditPhoto();
  }
};
const onSomeAreaClick = (evt, status) => {
  if (evt.target.className !== `${status}__inner`) {
    body.removeChild(document.querySelector(`.${status}`));
    document.removeEventListener('keydown', onPopupEscKeydown);
    document.removeEventListener('click', () => onSomeAreaClick());
    if (status === 'success') {
      closeEditPhoto();}
  }
};
const showMessage = (status) => {
  const templateFragment = document.querySelector(`#${status}`).content;
  const template = templateFragment.querySelector(`.${status}`);
  const fragment = document.createDocumentFragment();
  const post = template.cloneNode(true);
  post.classList.add(`${status}`);
  fragment.appendChild(post);
  body.appendChild(fragment);

  const button = document.querySelector(`.${status}__button`);
  button.addEventListener('click', () => {
    closeMessage(status);
  });
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', (evt) => onSomeAreaClick(evt, status));
};

const showAlert = () => { showMessage('error'); };
const showSuccess = () => { showMessage('success'); };

export {getRandomInteger, checkLength, isEscapeKey, showAlert, showSuccess};
