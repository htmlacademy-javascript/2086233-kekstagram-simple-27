import {imgUploadPreview} from './scale-editing.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');

const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const DEFAULT_STATE = EFFECTS[0];
let chosenEffect = DEFAULT_STATE;

const isDefault = () => chosenEffect === DEFAULT_STATE;

const updateSlider = () => {
  effectLevelSlider.classList.remove('hidden');
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      'min': chosenEffect.min,
      'max': chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });
  if (isDefault()) {
    effectLevelSlider.classList.add('hidden');
  }
};

const onPreviewChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

noUiSlider.create(effectLevelSlider, {
  range: {
    'min': DEFAULT_STATE.min,
    'max': DEFAULT_STATE.max,
  },
  step: DEFAULT_STATE.step,
  start: DEFAULT_STATE.max,
  connect: 'lower',
});
updateSlider();

const onSliderUpdate = () => {
  imgUploadPreview.style.filter = 'none';
  imgUploadPreview.className = '';
  effectLevelValue.value = '';
  if (isDefault()) {
    return;
  }
  const sliderValue = effectLevelSlider.noUiSlider.get();
  imgUploadPreview.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  imgUploadPreview.classList.add(`effects__preview--${chosenEffect.name}`);
  effectLevelValue.value = sliderValue;
};

imgUploadForm.addEventListener('change', onPreviewChange);
effectLevelSlider.noUiSlider.on('update', onSliderUpdate);

const resetEffect = () => {
  chosenEffect = DEFAULT_STATE;
  updateSlider();
};

export {resetEffect};
