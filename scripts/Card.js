class Card {
  constructor(data, cardSelector, openPopup) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._openPopup = openPopup;
    this._card = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    this._cardImage = document.querySelector('.popup-image__image');
    this._cardImageName = document.querySelector('.popup-image__name');
  }

  _likeHandler = (event) => {
    event.target.classList.toggle('card__like_liked');
  }

  _deleteHandler = (event) => {
    event.target.closest('.card').remove();
  }

  _popupImageHandler = () => {
      this._cardImage.src = this._link;
      this._cardImage.alt = `фотография ${this._name}`;
      this._cardImageName.innerText = this._name;
      this._openPopup();
  }

  _setListeners = () => {
    this._card.querySelector('.card__like').addEventListener('click', this._likeHandler);
    this._card.querySelector('.card__delete').addEventListener('click', this._deleteHandler);
    this._card.querySelector('.card__image').addEventListener('click', this._popupImageHandler);
  }

  getCard = () => {
    this._card.querySelector('.card__title').textContent = this._name;
    this._card.querySelector('.card__image').src = this._link;
    this._card.querySelector('.card__image').alt = `фотография ${this._name}`;
    this._setListeners();
    return this._card;
  }
};

export default Card;