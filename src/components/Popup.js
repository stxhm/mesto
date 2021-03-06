class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keyup', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._handleEscClose);
  }

  _handleEscClose = (event) => {
    event.preventDefault();
    if(event.key === 'Escape') {
      this.close()
    }
  }

  setEventListeners() {
    this._popup.querySelector('.popup__close').addEventListener('click', () => { 
      this.close()
    });
    this._popup.addEventListener('click', event => {
      if (event.target === event.currentTarget) {
        this.close();
      }
    });
  }
}

export default Popup;