import Popup from './Popup.js';

class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._buttonSubmit = this._popup.querySelector('.popup__button');
  }

  _handleLoading = (message) => {
    this._buttonSubmit.textContent = message;
  }

  setEventListeners() {
    super.setEventListeners();
    this._buttonSubmit.addEventListener('click', () => {
      this._handleSubmit();
      this._handleLoading('Удаление...');
    });
  }

  setSubmitAction(submitAction) {
    this._handleSubmit = submitAction;
  }

  open() {
    super.open();
    this._handleLoading('Да');
  }
}

export default PopupWithConfirm;