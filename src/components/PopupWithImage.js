import Popup from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._cardImage = this._popup.querySelector('.popup-image__image');
    this._cardImageName = this._popup.querySelector('.popup-image__name');
  }
  
  open(item) {
    this._cardImage.src = item.link;
    this._cardImage.alt = `фотография ${item.name}`;
    this._cardImageName.innerText = item.name;
    this._cardImage.addEventListener('click', super.open());
  }
}

export default PopupWithImage;