import '../pages/index.css';

import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import { 
  apiConfig,
  validationConfig,
  profileName,
  profileAbout,
  profileOpenBtn,
  newCardOpenBtn,
  profileNameInput,
  profileAboutInput,
  formPopupProfile,
  formPopupNewCard,
  profileAvatar,
  profileAvatarBtn,
  formProfileAvatar
} from '../utils/constants.js';

const api = new Api(apiConfig);

const popupConfirm = new PopupWithConfirm('.popup-confirm');
popupConfirm.setEventListeners();

function createCard (item) {
  const card = new Card( apiConfig.myId, item, '.template-card', { 
    handleCardClick: () => popupImage.open(item),
    handleCardDelete: () => {
      popupConfirm.setSubmitAction(() => {
        api.deleteCard(item._id)
        .then(() => {
          card.deleteHandler();
          popupConfirm.close();
        })
      });
      popupConfirm.open();
    },
    handleAddLike: () => {
      api.setLike(item._id)
      .then((item) => {
        card.showLikeCounter(item.likes);
        card.likeHandler();
      })
    },
    handleDeleteLike: () => {
      api.deleteLike(item._id)
      .then((item) => {
        card.showLikeCounter(item.likes);
        card.likeHandler();
      })
    }
  });
  cardsList.addItem(card.getCard());
}

const popupImage = new PopupWithImage('.popup-image');
popupImage.setEventListeners();

const user = new UserInfo({
  profileName: profileName,
  profileAbout: profileAbout,
  profileAvatar: profileAvatar
});

api.getUserInfo()
  .then((res) => {
    user.setUserInfo(res);
    user.setUserAvatar(res);
  });

const profilePopup = new PopupWithForm({
  popupSelector: '.popup_type_edit-profile',
  handleSubmitForm: () => {
    const inputValue = profilePopup.getInputValues();
    api.setUserInfo(inputValue)
    .then(data => user.setUserInfo(data));
  }
});

profilePopup.setEventListeners();

profileOpenBtn.addEventListener('click', () => {
  const currentValues = user.getUserInfo();
  profileNameInput.value = currentValues.name;
  profileAboutInput.value = currentValues.about;
  profilePopup.open();
});

const popupCard = new PopupWithForm({
  popupSelector: '.popup_type_new-card',
  handleSubmitForm: () => {
    const inputValue = popupCard.getInputValues();
    api.setCard(inputValue)
    .then(item => createCard(item));
  }
});

popupCard.setEventListeners(); 

newCardOpenBtn.addEventListener('click', () => {
  popupCard.open();
});

const avatarPopup = new PopupWithForm({
  popupSelector: '.popup_type_edit-avatar',
  handleSubmitForm: () => {
    const inputValue = avatarPopup.getInputValues();
    api.setAvatar(inputValue)
    .then((data) => {
      user.setUserAvatar(data);
    })
  }
});

avatarPopup.setEventListeners();

profileAvatarBtn.addEventListener('click', () => {
  avatarPopup.open();
});

const cardsList = new Section({
  'items': api.getInitialCards,
  'renderer': (item) => {
    createCard(item);
}}, '.cards');

api.getInitialCards()
.then((res) => {
  cardsList.renderItems(res);
});

const profileFormValidator = new FormValidator(validationConfig, formPopupProfile);
const cardFormValidator = new FormValidator(validationConfig, formPopupNewCard);
const avatarFormValidator = new FormValidator(validationConfig, formProfileAvatar);

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarFormValidator.enableValidation();