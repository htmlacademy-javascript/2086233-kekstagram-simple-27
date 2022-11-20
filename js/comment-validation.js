
import {sendData} from './load.js';
import {showAlert, showSuccess} from './utils.js';

const commentField = document.querySelector('.text__description');

const pristine = new Pristine(commentField, {
  classTo: 'img-upload__text',
  errorTextParent: 'text__description',
  errorTextClass: 'text__description__error-text',
});

const setUserFormSubmit = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    sendData(showSuccess, showAlert, new FormData(evt.target));
  }
};

export {setUserFormSubmit};
