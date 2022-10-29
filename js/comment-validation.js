const commentField = document.querySelector('.text__description');
const selectImageForm = document.querySelector('#upload-select-image');

const pristine = new Pristine(commentField, {
  classTo: 'img-upload__text',
  errorTextParent: 'text__description',
  errorTextClass: 'text__description__error-text',
});

selectImageForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});
