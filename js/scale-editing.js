const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const STEP = 25;
const MINSCALE = 25;
const MAXSCALE = 100;
const DEFAULT_SCALE = 100;

const scaleImageEdit = (sizePercent = DEFAULT_SCALE) => {
  imgUploadPreview.style.transform = 'scale(sizePercent / 100)';
  scaleValue.value = sizePercent;
};

const onscaleControlSmallerClick = () => {
  let newScaleValue = Number(scaleValue.value) - STEP;
  if (newScaleValue < MINSCALE) {
    newScaleValue = MINSCALE;}
  scaleImageEdit(newScaleValue);
};
const onscaleControlBiggerClick = () => {
  let newScaleValue = Number(scaleValue.value) + STEP;
  if (newScaleValue > MAXSCALE) {
    newScaleValue = MAXSCALE;}
  scaleImageEdit(newScaleValue);
};

scaleControlSmaller.addEventListener('click', onscaleControlSmallerClick);
scaleControlBigger.addEventListener('click', onscaleControlBiggerClick);

const resetScale = () => {
  scaleImageEdit();
};

export {resetScale, imgUploadPreview};
