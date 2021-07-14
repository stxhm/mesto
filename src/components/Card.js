class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._card = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
  }

  _likeHandler = (event) => {
    event.target.classList.toggle('card__like_liked');
  }

  _deleteHandler = () => {
    this._card.remove();
    this._card = null;
  }

  _setListeners = () => {
    this._card.querySelector('.card__like').addEventListener('click', this._likeHandler);
    this._card.querySelector('.card__delete').addEventListener('click', this._deleteHandler);
    this._card.querySelector('.card__image').addEventListener('click', () => this._handleCardClick(this._link, this._name));
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