const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('.img-upload__input[type=file]');
const imgPhotoPreview = document.querySelector('.img-upload__preview-image');

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((string) => fileName.endsWith(string));
  if (matches) {
    imgPhotoPreview.src = URL.createObjectURL(file);
  }
});
