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

getRandomInteger(7, 25);

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

/* Ф для создания массива из 25 объектов, каждый из к-х — описание загруженного фото. Структура объекта:
id, число — идентификатор фото(от 1 до 25). Идентификаторы не должны повторяться.
url, строка — адрес картинки вида photos/{{i}}.jpg, {{i}}- от 1 до 25. Адреса не д повторяться.
description, строка — описание фото.
likes, число — количество лайков, поставленных фото - случайное, от 15 до 200.
comments, число — кол-во комментов, оставленных к фото - случайное, от 0 до 200.*/

const DESCRIPTIONS = [
  'Вечерний Лиссабон',
  'Аромат прекрасного кофе',
  'Дела не ждут!',
  'Трес бандидос',
  'Мон амур-мур',
  'Выставка шоколада',
  'Концерт ДДТ',
  'In memories of 2Pac',
  'Фантастическая книга. Рекомендую!',
  'Тёплая встреча',
  'Плед, какао и кино',
  'Да, я вышиваю',
  'Рыжая осень',
  'С Новым годом',
  'Экземпляр редкого кота',
  'Family',
  'Нашёл красивое дерево',
  'Закат',
  'Сметанка!',
  'Простые радости',
  'Уют',
  'Let\'s adventure begins!',
  'More sun',
  'Могу, умею, практикую',
  'Sweet home',
];
const POSTS_COUNT = 25;

const createPost = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(15, 200),
  comments: getRandomInteger(0, 200),
});

console.log(createPost());

const postsContent = Array.from({length: POSTS_COUNT}, createPost);
console.log(postsContent);
