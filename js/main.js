/* Функция, возвр-я случайное целое число из переданного диапазона
(с использованием ресурса - https://learn.javascript.ru/task/random-int-min-max)*/

function getRandomInteger(firstNumber, secondNumber) {
  if (firstNumber >= 0 && secondNumber >= 0 && firstNumber <= secondNumber) {
    firstNumber = Math.ceil(firstNumber);
    secondNumber = Math.floor(secondNumber);
    return Math.floor(Math.random() * (secondNumber - firstNumber + 1)) + firstNumber;
  } else if (firstNumber > secondNumber) {
    let swap = firstNumber;
    firstNumber = secondNumber;
    secondNumber = swap;
    firstNumber = Math.ceil(firstNumber);
    secondNumber = Math.floor(secondNumber);
    return Math.floor(Math.random() * (secondNumber - firstNumber + 1)) + firstNumber;
  };
  return NaN;
};

getRandomInteger(7, 25);

/* Функция для проверки максимальной длины строки.
(с использованием ресурса - https://learn.javascript.ru/task/truncate)
*/

const MIN_LENGTH = 20;
const MAX_LENGTH = 140;

function checkLength(string, MAX_LENGTH, MIN_LENGTH) {
  if (string.length < MIN_LENGTH) {
    throw Error(errMsg);
  };
  return (string.length > MAX_LENGTH) ?
    string.slice(0, MAX_LENGTH - 1) + '…' : string;
};

checkLength(103, MAX_LENGTH, MIN_LENGTH);
