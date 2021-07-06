class FormValidator {
  constructor(config) {
    this._formSelector = config.formSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
  }

  _setCustomError = (input) => {
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

  _setFieldError = (input) => {
    const span = document.querySelector(`#${input.id}-error`);
    span.textContent = input.validationMessage;
  }

  _setSubmitButtonState = (form) => {
    const button = form.querySelector(this._submitButtonSelector);
    const isValid = form.checkValidity();
    if (isValid) {
      button.classList.remove(this._inactiveButtonClass);
      button.removeAttribute('disabled');
    } else {
      button.classList.add(this._inactiveButtonClass);
      button.setAttribute('disabled', true);
    }
  }

  _setInputState = (input) => {
    const isValid = input.checkValidity();
    if (!isValid) {
      input.classList.add(this._inputErrorClass);
    } else {
      input.classList.remove(this._inputErrorClass);
    }
  }

  _handleFormSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const button = form.querySelector(this._submitButtonSelector);
    const isValid = form.checkValidity();
    if (isValid) {
      form.reset();
      button.classList.add(this._inactiveButtonClass);
      button.setAttribute('disabled', true);
    } 
  }

  _handleFormInput = (evt) => {
    const input = evt.target;
    const form = evt.currentTarget;
  
    this._setCustomError(input);
    this._setFieldError(input);
    this._setSubmitButtonState(form);
    this._setInputState(input);
  }

  enableValidation = () => {
    const forms = document.querySelectorAll(this._formSelector);
    Array.from(forms).forEach((item) => {
      item.addEventListener('submit', () => this._handleFormSubmit (event));
      item.addEventListener('input', () => this._handleFormInput (event));
    });
  }
}

export default FormValidator;