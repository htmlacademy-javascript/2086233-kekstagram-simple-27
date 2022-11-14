import {isEscapeKey} from './utils.js';
import {resetScale} from './scale-editing.js';
import {resetEffect} from './effect-editing.js';
import {commentField} from './comment-validation.js';

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
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imgUpload.value = '';
  commentField.value = '';
  submitButton.setAttribute('disabled', 'disabled');
  commentField.value = '';
  document.removeEventListener('keydown', onPopupEscKeydown);
  uploadCancel.removeEventListener('click', () => {
    closeEditPhoto();
  });
}

export {openEditPhoto, closeEditPhoto, onPopupEscKeydown};
