import '../pages/index.css';

import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import { 
  initialCards,
  validationConfig,
  profileName,
  profileAbout,
  profileOpenBtn,
  newCardOpenBtn,
  profileNameInput,
  profileAboutInput,
  formPopupProfile,
  formPopupNewCard
} from '../utils/constants.js';

function createCard (item) {
  const card = new Card(item, '.template-card', () => popupImage.open(item));
  cardsList.addItem(card.getCard());
}

const popupImage = new PopupWithImage('.popup-image');
popupImage.setEventListeners();

const user = new UserInfo({
  profileName: profileName,
  profileAbout: profileAbout
});

const profilePopup = new PopupWithForm({
  popupSelector: '.popup_type_edit-profile',
  handleSubmitForm: (data) => {
    user.setUserInfo(data);
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
  'popupSelector': '.popup_type_new-card',
  'handleSubmitForm': (item) => {
      createCard(item);
    }
});

popupCard.setEventListeners(); 

newCardOpenBtn.addEventListener('click', () => {
  popupCard.open();
});

const cardsList = new Section({
  'items': initialCards,
  'renderer': (item) => {
    createCard(item);
}}, '.cards');
cardsList.renderItems();

const profileformValidator = new FormValidator(validationConfig, formPopupProfile);
const cardformValidator = new FormValidator(validationConfig, formPopupNewCard);

profileformValidator.enableValidation();
cardformValidator.enableValidation();