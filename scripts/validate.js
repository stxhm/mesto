const validationConfig = {
  formSelector: '.popup__form',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_invalid'
};

function enableValidation ({formSelector, ...params}) {
  const forms = document.querySelectorAll(formSelector);

  Array.from(forms).forEach((item) => {
    item.addEventListener('submit', () => handleFormSubmit (event, params));
    item.addEventListener('input', () => handleFormInput (event, params));
  });
}

function handleFormSubmit (evt, {submitButtonSelector, inactiveButtonClass}) {
  evt.preventDefault();
  const form = evt.currentTarget;
  const button = form.querySelector(submitButtonSelector);
  const isValid = form.checkValidity();

  if (isValid) {
    form.reset();
    button.classList.add(inactiveButtonClass);
    button.setAttribute('disabled', true);
  } 
}

function handleFormInput (evt, params) {
  const input = evt.target;
  const form = evt.currentTarget;

  setCustomError(input);
  setFieldError(input);
  setSubmitButtonState(form, params);
  setInputState(input, params);
}

function setCustomError(input) {
  const validity = input.validity;
  const currentLength = input.value.length;
  const min = input.getAttribute('minlength');
  const max = input.getAttribute('maxlength');
  
  input.setCustomValidity('');

  if (validity.tooShort || validity.tooLong) {
    input.setCustomValidity(`Строка имеет неверную длину. Введено символов: ${currentLength}, нужно от ${min} до ${max}`);
  }

  if (currentLength === 0) {
    input.setCustomValidity(`Вы пропустили это поле`);
  }

  if (validity.typeMismatch) {
    input.setCustomValidity('Введите адрес сайта');
  }
}

function setFieldError(input) {
  const span = document.querySelector(`#${input.id}-error`);
  span.textContent = input.validationMessage;
}

function setSubmitButtonState(form, {submitButtonSelector, inactiveButtonClass}) {
  const button = form.querySelector(submitButtonSelector);
  const isValid = form.checkValidity();

  if (isValid) {
    button.classList.remove(inactiveButtonClass);
    button.removeAttribute('disabled');
  } else {
    button.classList.add(inactiveButtonClass);
    button.setAttribute('disabled', true);
  }
}

function setInputState(input, {inputErrorClass}) {
  const isValid = input.checkValidity();

  if (!isValid) {
    input.classList.add(inputErrorClass);
  } else {
    input.classList.remove(inputErrorClass);
  }
}

enableValidation(validationConfig);