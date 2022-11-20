import {POSTS_COUNT} from './data.js';

const getData = (onSuccess) => fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => {
    if (response.ok) {
      return response.json();}
    throw new Error (`${response.status}${response.statusText}`);
  })
  .then((data) => {
    onSuccess(data.slice(0, POSTS_COUNT));

  })
  .catch ((err) => {
    console.error(err);});

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      throw new Error('Данные невалидны');
    }
  })
    .catch((err) => {
      onFail(err);
    });
};

export {getData, sendData};

/*Если при загрузке данных с сервера произошла ошибка запроса, нужно показать сообщение.
Дизайн блока с сообщением нужно придумать самостоятельно.*/

