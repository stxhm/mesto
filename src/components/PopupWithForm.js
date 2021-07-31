import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor ({ popupSelector, handleSubmitForm }) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputs = Array.from(this._popupForm.querySelectorAll('.popup__input'));
    this._buttonSubmit = this._popup.querySelector('.popup__button');
  }

  _handleLoading = (message) => {
    this._buttonSubmit.textContent = message;
  }

  getInputValues() {
    const data = {};
    this._inputs.forEach(item => {
      data[item.name] = item.value
    });
    return data;
  }

  _submitEventHandler = (event) => {
    event.preventDefault();
    this._handleLoading('Сохранение...');
    this._handleSubmitForm(this.getInputValues());
  }

  setEventListeners() {
    this._popupForm.addEventListener('submit', this._submitEventHandler);
    super.setEventListeners();
  }

  open() {
    super.open();
    this._handleLoading('Сохранить');
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}

export default PopupWithForm;