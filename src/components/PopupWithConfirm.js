import Popup from './Popup.js';

class PopupWithConfirm extends Popup {

  setEventListeners() {
    super.setEventListeners();
    this._popup.querySelector('.popup__button').addEventListener('click', () => {
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