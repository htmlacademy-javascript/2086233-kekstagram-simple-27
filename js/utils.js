export {getRandomInteger, checkLength};
/* Функция, возвр-я случайное целое число из переданного диапазона
(с использованием ресурса - https://learn.javascript.ru/task/random-int-min-max)*/

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

checkLength();
getRandomInteger(7, 25);
