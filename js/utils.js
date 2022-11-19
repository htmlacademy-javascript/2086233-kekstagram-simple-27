import {onPopupEscKeydown} from './form-popup.js';

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

const showAlert = () => {
  const alertContainer = document.querySelector('body');
  const templateFragment = document.querySelector('#error').content;
  const template = templateFragment.querySelector('.error');
  const fragment = document.createDocumentFragment();
  const errorPost = template.cloneNode(true);
  errorPost.classList.add('error');
  fragment.appendChild(errorPost);
  alertContainer.appendChild(fragment);

  const errorButton = document.querySelector('.error__button');
  const onSomeAreaClick = (evt) => {
    if (evt.target.className !== 'error__inner') {
      alertContainer.removeChild(fragment);
      document.removeEventListener('keydown', onPopupEscKeydown);
      document.removeEventListener('click', onSomeAreaClick);
    }
  };
  const closeAlertMessage = () => {
    alertContainer.removeChild(fragment);
    document.removeEventListener('keydown', onPopupEscKeydown);
    document.removeEventListener('click', onSomeAreaClick);
  };

  errorButton.addEventListener('click', () => {
    closeAlertMessage();
  });
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onSomeAreaClick);
};

const showSuccess = () => {
  const successButton = document.querySelector('.success__button');
  const successMessageContainer = document.querySelector('body');
  const templateFragment = document.querySelector('#success').content;
  const template = templateFragment.querySelector('.success');
  const fragment = document.createDocumentFragment();
  const successPost = template.cloneNode(true);
  successPost.classList.add('success');
  fragment.appendChild(successPost);
  successMessageContainer.appendChild(fragment);

  const onSomeAreaClick = (evt) => {
    if (evt.target.className !== 'success__inner') {
      successMessageContainer.removeChild(fragment);
      document.removeEventListener('keydown', onPopupEscKeydown);
      document.removeEventListener('click', onSomeAreaClick);
    }
  };
  const closeSuccessMessage = () => {
    successMessageContainer.removeChild(fragment);
    document.removeEventListener('keydown', onPopupEscKeydown);
    document.removeEventListener('click', onSomeAreaClick);
  };
  successButton.addEventListener('click', () => {
    closeSuccessMessage();
  });
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onSomeAreaClick);
};

export {getRandomInteger, checkLength, isEscapeKey, showAlert, showSuccess};
