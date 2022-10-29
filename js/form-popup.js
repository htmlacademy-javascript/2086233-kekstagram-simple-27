import {isEscapeKey} from './utils';

const imgUpload = document.querySelector('#upload-file');
const uploadSelectImage = document.querySelector('#upload-select-image');
const uploadCancel = document.querySelector('#upload-cancel');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');

const onPopupEscKeydown = (evt) => {
      if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeEditPhoto()
    }
}

imgUpload.addEventListener('change', (evt) => {
    openEditPhoto()
}

function openEditPhoto () {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown',  onPopupEscKeydown);
  uploadCancel.addEventListener('click',  (evt) => {
      closeEditPhoto()
});
}

function closeEditPhoto () {
  imgUploadOverlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
    imgUpload.value = '';
    document.removeEventListener('keydown', onPopupEscKeydown);
    uploadCancel.removeEventListener('click', (evt) => {
    closeEditPhoto()
  });
}
