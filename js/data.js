import {getRandomInteger} from './utils.js';

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
const postsContent = Array.from({length: POSTS_COUNT}, (obj, index) => createPost(index + 1));

export {postsContent, POSTS_COUNT};
