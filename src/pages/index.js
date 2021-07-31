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
  formProfileAvatar,
  newCardSubmit
} from '../utils/constants.js';

let userId = null;

const api = new Api(apiConfig);

const userInfo = new UserInfo({ profileName, profileAbout, profileAvatar });

const cardsList = new Section({
  'renderer': (item) => {
    createCard(item);
}}, '.cards');

const popupConfirm = new PopupWithConfirm('.popup-confirm');
popupConfirm.setEventListeners();

api.getInitialData()
.then((data) => {
  const [userData, cardsData] = data;
  userId = userData._id;
  userInfo.setUserInfo(userData);
  userInfo.setUserAvatar(userData);
  cardsList.renderItems(cardsData);
})
.catch(err => console.log(err));

function createCard (item) {
  const card = new Card( userId, item, '.template-card', { 
    handleCardClick: () => popupImage.open(item),
    handleCardDelete: () => {
      popupConfirm.setSubmitAction(() => {
        api.deleteCard(item._id)
        .then(() => {
          card.deleteHandler();
          popupConfirm.close();
        })
        .catch(err => console.log(err))
      });
      popupConfirm.open();
    },
    handleAddLike: () => {
      api.setLike(item._id)
      .then((newCard) => {
        card.showLikeCounter(newCard.likes);
        card.likeHandler();
      })
      .catch(err => console.log(err))
    },
    handleDeleteLike: () => {
      api.deleteLike(item._id)
      .then((newCard) => {
        card.showLikeCounter(newCard.likes);
        card.likeHandler();
      })
      .catch(err => console.log(err))
    }
  });
  cardsList.addItem(card.getCard());
}

const popupImage = new PopupWithImage('.popup-image');
popupImage.setEventListeners();

const profilePopup = new PopupWithForm({
  popupSelector: '.popup_type_edit-profile',
  handleSubmitForm: () => {
    const inputValue = profilePopup.getInputValues();
    api.setUserInfo(inputValue)
    .then((data) => {
      userInfo.setUserInfo(data);
      profilePopup.close();
    })
    .catch(err => console.log(err))
  }
});
profilePopup.setEventListeners();

profileOpenBtn.addEventListener('click', () => {
  const currentValues = userInfo.getUserInfo();
  profileNameInput.value = currentValues.name;
  profileAboutInput.value = currentValues.about;
  profilePopup.open();
});

const popupCard = new PopupWithForm({
  popupSelector: '.popup_type_new-card',
  handleSubmitForm: () => {
    const inputValue = popupCard.getInputValues();
    api.setCard(inputValue)
    .then((item) => {
      createCard(item); 
      popupCard.close();
    })
    .catch(err => console.log(err));
  }
});
popupCard.setEventListeners(); 

newCardOpenBtn.addEventListener('click', () => {
  popupCard.open();
  cardFormValidator.disableButton();
});

const avatarPopup = new PopupWithForm({
  popupSelector: '.popup_type_edit-avatar',
  handleSubmitForm: () => {
    const inputValue = avatarPopup.getInputValues();
    api.setAvatar(inputValue)
    .then((data) => {
      userInfo.setUserAvatar(data);
      avatarPopup.close();
    })
    .catch(err => console.log(err))
  }
});
avatarPopup.setEventListeners();

profileAvatarBtn.addEventListener('click', () => {
  avatarPopup.open();
  avatarFormValidator.disableButton();
});

const profileFormValidator = new FormValidator(validationConfig, formPopupProfile);
const cardFormValidator = new FormValidator(validationConfig, formPopupNewCard);
const avatarFormValidator = new FormValidator(validationConfig, formProfileAvatar);

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarFormValidator.enableValidation();