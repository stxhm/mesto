export const initialCards = [
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

export const validationConfig = {
  formSelector: '.popup__form',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_invalid'
};

export const profileName = document.querySelector('.profile__name');
export const profileAbout = document.querySelector('.profile__about');
export const profileOpenBtn = document.querySelector('.profile__edit');
export const newCardOpenBtn = document.querySelector('.profile__add-button');
export const popupProfile = document.querySelector('.popup_type_edit-profile');
export const profileNameInput = popupProfile.querySelector('.popup__input_type_name');
export const profileAboutInput = popupProfile.querySelector('.popup__input_type_about');
export const formPopupProfile = popupProfile.querySelector('form');
export const popupNewCard = document.querySelector('.popup_type_new-card');
export const formPopupNewCard = popupNewCard.querySelector('form');