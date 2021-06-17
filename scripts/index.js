const initialCards = [
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  }
];

const cardTemplate = document.querySelector('.template_card').content;
const cards = document.querySelector('.cards');
const popupNewCard = document.querySelector('.popup_type_new-card');
const newCardBtn = document.querySelector('.profile__add-button');
const closeNewCardBtn = popupNewCard.querySelector('.popup__close');
const newCardForm = document.forms.newcard;

const popupProfile = document.querySelector('.popup_type_edit-profile');
const openProfileBtn = document.querySelector('.profile__edit');
const closeProfileBtn = popupProfile.querySelector('.popup__close');
const profileForm = document.forms.editprofile;
const nameInput = profileForm.querySelector('.popup__input_type_name');
const aboutInput = profileForm.querySelector('.popup__input_type_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const popupImage = document.querySelector('.popup-image');
const popupImageImage = popupImage.querySelector('.popup-image__image');
const popupImageName = popupImage.querySelector('.popup-image__name');
const popupImageClose = popupImage.querySelector('.popup-image__close');

// ф-ция открытия попапа
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

// ф-ция закрытия попапа
function closePopup() {
  const popupOpened = document.querySelector('.popup_opened');
  popupOpened.classList.remove('popup_opened');

  document.removeEventListener('keydown', () => closePopupEsc(evt));
}

// ф-ция закрытия попапа по клику в пустую область
function closePopupOverlay(evt){
  if(evt.target === evt.currentTarget) {
    closePopup ()
  }
}

// ф-ция закрытия попапа по Esc
function closePopupEsc(evt){
  const popupOpened = document.querySelector('.popup_opened');
  if(evt.key === 'Escape' && popupOpened) {
    closePopup ()
  }
}

// ф-ция создания попапа с картинкой
function popupImageHandler(name, link) {
  popupImageImage.src = link;
  popupImageImage.alt = `фотография ${name}`;
  popupImageName.innerText = name;
  openPopup(popupImage);
}

// ф-ция создания карточки
function createCard (name, link) {
  const cardElement = cardTemplate.cloneNode(true);
  const likeIcon = cardElement.querySelector('.card__like');
  const deleteIcon = cardElement.querySelector('.card__delete');
  const cardImage = cardElement.querySelector('.card__image');
  cardElement.querySelector('.card__title').textContent = name;
  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__image').alt = `фотография ${name}`;

  likeIcon.addEventListener('click', likeHandler);
  deleteIcon.addEventListener('click', deleteHandler);
  cardImage.addEventListener('click', () => popupImageHandler(name, link));
  return cardElement;
}

// ф-ция добавления карточки в контейнер
function addCard(container, cardElement) { 
  container.prepend(cardElement); 
}

// ф-ция добавления карточки пользователем
function addCustomCard(evt) {
  const name = newCardForm.querySelector('.popup__input_type_name').value;
  const link = newCardForm.querySelector('.popup__input_type_link').value;
  addCard(cards, createCard(name, link) );
  evt.preventDefault();
  closePopup (popupNewCard)
}

// ф-ция обработчик для лайка
function likeHandler(evt) {
  evt.target.classList.toggle('card__like_liked');
}

// ф-ция удаления карточки
function deleteHandler(evt) {
  evt.target.closest('.card').remove();
}

// ф-ция открытия формы редактирования профиля
function popupProfileOpen() {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

// ф-ция редактирования профиля
function profileSubmit (evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup (popupProfile);
}

// ф-ция добавления дефолтных карточек
function renderCards() {
  initialCards.forEach((item) => {
    addCard(cards, createCard(item.name, item.link));
  })
}
renderCards();

// открытие формы создания карточки
newCardBtn.addEventListener('click', () => openPopup(popupNewCard));

// закрытие формы создания карточки
closeNewCardBtn.addEventListener('click', closePopup);
popupNewCard.addEventListener('click', () => closePopupOverlay(event));
document.addEventListener('keydown', () => closePopupEsc(event))

// закрытие попапа с картинкой
popupImageClose.addEventListener('click', closePopup);
popupImage.addEventListener('click', () => closePopupOverlay(event));
document.addEventListener('keydown', () => closePopupEsc(event))

// добавление карточки пользователем
newCardForm.addEventListener('submit', addCustomCard);

// закрытие формы редактирования профиля
closeProfileBtn.addEventListener('click', closePopup);
popupProfile.addEventListener('click', () => closePopupOverlay(event));
document.addEventListener('keydown', () => closePopupEsc(event))

// открытие формы редактирования профиля
openProfileBtn.addEventListener('click', popupProfileOpen);

// сохранение отредактированной формы
profileForm.addEventListener('submit', profileSubmit);
