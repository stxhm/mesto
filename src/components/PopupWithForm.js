import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor ({ popupSelector, handleSubmitForm }) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputs = Array.from(this._popupForm.querySelectorAll('.popup__input'));
  }

  getInputValues() {
    const data = {};
    this._inputs.forEach(item => {
      data[item.name] = item.value
    });
    return data;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleLoading('Сохранение...');
      this._handleSubmitForm(this.getInputValues());
      this.close();
    });
  }

  open() {
    super.open();
    this._handleLoading('Сохранить');
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}

export default PopupWithForm;