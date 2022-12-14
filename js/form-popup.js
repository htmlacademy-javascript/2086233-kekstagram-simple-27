import {isEscapeKey} from './utils.js';
import {resetScale} from './scale-editing.js';
import {resetEffect} from './effect-editing.js';

const commentField = document.querySelector('.text__description');
const imgUpload = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const submitButton = document.querySelector('.img-upload__submit');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditPhoto();
  }
};

imgUpload.addEventListener('change', () => {
  openEditPhoto();
});

function openEditPhoto () {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  uploadCancel.addEventListener('click', () => {
    closeEditPhoto();
  });
}

function closeEditPhoto () {
  resetScale();
  resetEffect();
  imgUpload.value = '';
  commentField.value = '';
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  submitButton.setAttribute('disabled', 'disabled');
  document.removeEventListener('keydown', onPopupEscKeydown);
  uploadCancel.removeEventListener('click', () => {
    closeEditPhoto();
  });
}

export {openEditPhoto, closeEditPhoto, onPopupEscKeydown};
