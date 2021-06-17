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

const cardTemplate = document.querySelector('.template-card').content;
const cards = document.querySelector('.cards');
const popupNewCard = document.querySelector('.popup_type_new-card');
const newCardOpenBtn = document.querySelector('.profile__add-button');
const newCardCloseBtn = popupNewCard.querySelector('.popup__close');
const newCardForm = document.forms.newcard;
const newCardNameInput = newCardForm.querySelector('.popup__input_type_name');
const newCardLinkInput = newCardForm.querySelector('.popup__input_type_link');
const popupProfile = document.querySelector('.popup_type_edit-profile');
const profileOpenBtn = document.querySelector('.profile__edit');
const profileCloseBtn = popupProfile.querySelector('.popup__close');
const profileForm = document.forms.editprofile;
const profileNameInput = profileForm.querySelector('.popup__input_type_name');
const profileAboutInput = profileForm.querySelector('.popup__input_type_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const popupImage = document.querySelector('.popup-image');
const popupImageImage = popupImage.querySelector('.popup-image__image');
const popupImageName = popupImage.querySelector('.popup-image__name');
const popupImageClose = popupImage.querySelector('.popup__close');

// ф-ция открытия попапа
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

// ф-ция закрытия попапа
function closePopup() {
  const popupOpened = document.querySelector('.popup_opened');
  popupOpened.classList.remove('popup_opened');

  document.removeEventListener('keydown', closePopupEsc);
}

// ф-ция закрытия попапа по клику в пустую область
function closePopupOverlay(event){
  if(event.target === event.currentTarget) {
    closePopup ()
  }
}

// ф-ция закрытия попапа по Esc
function closePopupEsc(event){
  const popupOpened = document.querySelector('.popup_opened');
  if(event.key === 'Escape' && popupOpened) {
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
  cardImage.src = link;
  cardImage.alt = `фотография ${name}`;

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
function addCustomCard(event) {
  const name = newCardNameInput.value;
  const link = newCardLinkInput.value;
  addCard(cards, createCard(name, link) );
  event.preventDefault();
  closePopup ()
}

// ф-ция обработчик для лайка
function likeHandler(event) {
  event.target.classList.toggle('card__like_liked');
}

// ф-ция удаления карточки
function deleteHandler(event) {
  event.target.closest('.card').remove();
}

// ф-ция открытия формы редактирования профиля
function openPopupProfile() {
  openPopup(popupProfile);
  profileNameInput.value = profileName.textContent;
  profileAboutInput.value = profileAbout.textContent;
}

// ф-ция редактирования профиля
function handleProfileFormSubmit (event) {
  event.preventDefault(); 
  profileName.textContent = profileNameInput.value;
  profileAbout.textContent = profileAboutInput.value;
  closePopup ();
}

// ф-ция добавления дефолтных карточек
function renderCards() {
  initialCards.forEach((item) => {
    addCard(cards, createCard(item.name, item.link));
  })
}
renderCards();

// открытие формы создания карточки
newCardOpenBtn.addEventListener('click', () => openPopup(popupNewCard));

// закрытие формы создания карточки
newCardCloseBtn.addEventListener('click', closePopup);
popupNewCard.addEventListener('click', () => closePopupOverlay(event));

// закрытие попапа с картинкой
popupImageClose.addEventListener('click', closePopup);
popupImage.addEventListener('click', () => closePopupOverlay(event));

// добавление карточки пользователем
newCardForm.addEventListener('submit', addCustomCard);

// закрытие формы редактирования профиля
profileCloseBtn.addEventListener('click', closePopup);
popupProfile.addEventListener('click', () => closePopupOverlay(event));

// открытие формы редактирования профиля
profileOpenBtn.addEventListener('click', openPopupProfile);

// сохранение отредактированной формы
profileForm.addEventListener('submit', handleProfileFormSubmit);
