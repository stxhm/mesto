import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { initialCards, validationConfig } from './consts.js';

const cards = document.querySelector('.cards');
const popupNewCard = document.querySelector('.popup_type_new-card');
const newCardOpenBtn = document.querySelector('.profile__add-button');
const newCardCloseBtn = popupNewCard.querySelector('.popup__close');
const newCardForm = document.forms.newcard;
const newCardNameInput = newCardForm.querySelector('.popup__input_type_name');
const newCardLinkInput = newCardForm.querySelector('.popup__input_type_link');
const popupImage = document.querySelector('.popup-image');
const popupImageClose = popupImage.querySelector('.popup__close');
const popupProfile = document.querySelector('.popup_type_edit-profile');
const profileOpenBtn = document.querySelector('.profile__edit');
const profileCloseBtn = popupProfile.querySelector('.popup__close');
const profileForm = document.forms.editprofile;
const profileNameInput = profileForm.querySelector('.popup__input_type_name');
const profileAboutInput = profileForm.querySelector('.popup__input_type_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

// ф-ция создания карточки
function createCard (item) {
  const card = new Card(item, '.template-card', () => openPopup(popupImage));
  addCard(cards, card.getCard());
}

// ф-ция добавления карточки в контейнер
function addCard(container, cardElement) { 
  container.prepend(cardElement); 
} 

// ф-ция добавления карточки пользователем
function addCustomCard(event) {
  const name = newCardNameInput.value;
  const link = newCardLinkInput.value;
  const item = {name, link};
  createCard(item); 
  event.preventDefault();
  closePopup ()
}

// ф-ция добавления дефолтных карточек
function renderCards() {
  initialCards.forEach((item) => {
    createCard(item);
  })
}
renderCards();

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

// закрытие формы редактирования профиля
profileCloseBtn.addEventListener('click', closePopup);
popupProfile.addEventListener('click', () => closePopupOverlay(event));

// открытие формы редактирования профиля
profileOpenBtn.addEventListener('click', openPopupProfile);

// сохранение отредактированной формы
profileForm.addEventListener('submit', handleProfileFormSubmit);

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

// валидация
const profileformValidator = new FormValidator(validationConfig, popupProfile);
const cardformValidator = new FormValidator(validationConfig, popupNewCard);

profileformValidator.enableValidation();
cardformValidator.enableValidation();