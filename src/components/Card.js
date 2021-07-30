class Card {
  constructor(myId, data, cardSelector, { handleCardClick, handleCardDelete, handleAddLike, handleDeleteLike }) {
    this._myId = myId;
    this._owner = data.owner;
    this._name = data.name;
    this._link = data.link;
    this._like = data.likes;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleAddLike = handleAddLike;
    this._handleDeleteLike = handleDeleteLike;
    this._card = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
  }

  likeHandler = () => {
    const like = this._card.querySelector('.card__like');
    like.classList.toggle('card__like_liked');
  }

  showLikeCounter(data) {
    const likeCounter = this._card.querySelector('.card__like-counter');
    likeCounter.textContent = data.length;
  }

  _showLike = () => {
    const like = this._card.querySelector('.card__like');
    !like.classList.contains('card__like_liked') ? this._handleAddLike() : this._handleDeleteLike();
  }

  deleteHandler = () => {
    this._card.remove();
    this._card = null;
  }

  _setListeners = () => {
    this._card.querySelector('.card__like').addEventListener('click', this._showLike);
    this._card.querySelector('.card__delete').addEventListener('click', () => this._handleCardDelete(this._card));
    this._card.querySelector('.card__image').addEventListener('click', () => this._handleCardClick(this._link, this._name));
  }

  getCard = () => {
    this._card.querySelector('.card__title').textContent = this._name;
    this._card.querySelector('.card__image').src = this._link;
    this._card.querySelector('.card__image').alt = `фотография ${this._name}`;
    this._card.querySelector('.card__like-counter').textContent = this._like.length;

    if (this._like.find((like) => like._id === this._myId)) {
      this._card.querySelector('.card__like').classList.add('card__like_liked');
    };

    if (this._owner._id === this._myId) {
      this._card.querySelector('.card__delete').style.display = 'block';
    } else {
      this._card.querySelector('.card__delete').style.display = 'none';
    };

    this._setListeners();

    return this._card;
  }
};

export default Card;