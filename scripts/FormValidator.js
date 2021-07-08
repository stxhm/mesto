class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._form = formElement.querySelector(this._formSelector);
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
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

  _setSubmitButtonState = () => {
    const isValid = this._form.checkValidity();
    if (isValid) {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    } else {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true);
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
    const isValid = form.checkValidity();
    if (isValid) {
      form.reset();
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true);
    } 
  }

  _handleFormInput = (evt) => {
    const input = evt.target;
    this._setCustomError(input);
    this._setFieldError(input);
    this._setSubmitButtonState(this._form);
    this._setInputState(input);
  }

  enableValidation = () => {
    this._form.addEventListener('submit', () => this._handleFormSubmit(event));
    this._form.addEventListener('input', () => this._handleFormInput(event));
  }
}

export default FormValidator;