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


const ALERT_SHOW_TIME = 5000;
const showAlert = () => {
  const alertContainer = document.querySelector('.error__inner');
  const templateFragment = document.querySelector('#error').content;
  const template = templateFragment.querySelector('.error');
  const fragment = document.createDocumentFragment();
  const errorPost = template.cloneNode(true);
  errorPost.classList.add('error');
  fragment.appendChild(errorPost);
  alertContainer.appendChild(fragment);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const showSuccess = () => {
  const successButton = document.querySelector('.success__button');
  const successMessageContainer = document.querySelector('.success__inner');
  const templateFragment = document.querySelector('#success').content;
  const template = templateFragment.querySelector('.success');
  const fragment = document.createDocumentFragment();
  const successPost = template.cloneNode(true);
  successPost.classList.add('success');
  fragment.appendChild(successPost);
  successMessageContainer.appendChild(fragment);
  const closeSuccessMessage = () => {
    successMessageContainer.removeChild(fragment);
    document.removeEventListener('keydown', onPopupEscKeydown);
  };
  successButton.addEventListener('click', () => {
    closeSuccessMessage();
  });
  document.addEventListener('keydown', onPopupEscKeydown);
};

export {getRandomInteger, checkLength, isEscapeKey, showAlert, showSuccess};
