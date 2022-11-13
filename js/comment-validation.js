import { sendData } from './load.js';
import {showAlert} from './utils.js';

const commentField = document.querySelector('.text__description');
const selectImageForm = document.querySelector('#upload-select-image');

const pristine = new Pristine(commentField, {
  classTo: 'img-upload__text',
  errorTextParent: 'text__description',
  errorTextClass: 'text__description__error-text',
});

const setUserFormSubmit = (onSuccess) => {
  selectImageForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      sendData(
        () => onSuccess(),
        () => showAlert(),
        new FormData(evt.target),
      );
    }
  });
};

export {setUserFormSubmit, commentField};
