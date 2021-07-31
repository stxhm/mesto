export const validationConfig = {
  formSelector: '.popup__form',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_invalid'
};

export const apiConfig = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-26',
  headers: {
    authorization: 'e7f3e8e1-45dc-42a8-aa6f-a9dfa39b7b98',
    'Content-Type': 'application/json'
  }
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
export const profileAvatarBtn = document.querySelector('.profile__avatar-button');
export const profileAvatar = document.querySelector('.profile__avatar');
export const popupProfileAvatar = document.querySelector('.popup_type_edit-avatar');
export const formProfileAvatar = popupProfileAvatar.querySelector('form');