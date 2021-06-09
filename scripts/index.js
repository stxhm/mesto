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
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  }
]; 

const cardTemplate = document.querySelector('.template_card').content;
const cards = document.querySelector('.cards');
const popupNewCard = document.querySelector('.popup_type_new-card');
const newCardBtn = document.querySelector('.profile__add-button');
const closeNewCardBtn = popupNewCard.querySelector('.popup__close');
const newCardForm = document.forms.newcard;
const popupImage = document.querySelector('.popup-image');
const popupImageImage = document.querySelector('.popup-image__image');
const popupImageName = document.querySelector('.popup-image__name');
const popupImageClose = document.querySelector('.popup-image__close');

// 1. добавление дефолтных карточек
function addCard() {
  initialCards.forEach((item) => {
    let name = item.name;
    let link = item.link;
    createCard(name, link);
  })
}

addCard();

// 2. открытие формы создания карточки
function openPopup(element) {
  element.classList.add('popup_opened');
}

newCardBtn.addEventListener('click', () => openPopup(popupNewCard));

// 3. закрытие формы создания карточки
function closePopup(element) {
  element.classList.remove('popup_opened');
}

closeNewCardBtn.addEventListener('click', () => closePopup(popupNewCard));

popupNewCard.addEventListener('click', function(event){
  if(event.target === event.currentTarget) {
    closePopup (popupNewCard)
  }
});

// 4. создание карточки
function createCard (name, link) {
  const card = cardTemplate.cloneNode(true);
  const likeIcon = card.querySelector('.card__like');
  const deleteIcon = card.querySelector('.card__delete');
  const cardImage = card.querySelector('.card__image');

  card.querySelector('.card__title').innerText = name;
  card.querySelector('.card__image').src = link;
  cards.prepend(card);

  likeIcon.addEventListener('click', likeHandler);
  deleteIcon.addEventListener('click', deleteHandler);

  //открытие popup с картинкой
  cardImage.addEventListener('click', () => {
    popupImage.classList.add('popup_opened');
    popupImageImage.src = link;
    popupImageName.innerText = name;
  });

  //закрытие popup с картинкой
  popupImageClose.addEventListener('click', () => {
    popupImage.classList.remove('popup_opened');
  })
}

// 5. добавление карточки пользователем
function addCustomCard(evt) {
  let name = newCardForm.querySelector('.popup__input_type_name').value;
  let link = newCardForm.querySelector('.popup__input_type_link').value;
  
  createCard(name, link);
  evt.preventDefault();
  closePopup (popupNewCard)
}
newCardForm.addEventListener('submit', addCustomCard);

// 6. лайк
function likeHandler(evt) {
  evt.target.classList.toggle('card__like_liked');
}

// 7. удаление карточки
function deleteHandler(evt) {
  const placesList = document.querySelector('cards');
  cards.removeChild(evt.target.parentNode);
}

// 8. редактирование профиля
const popupProfile = document.querySelector('.popup_type_edit-profile');
const openProfileBtn = document.querySelector('.profile__edit');
const closePopupBtn = document.querySelector('.popup__close');
const profileForm = document.forms.editprofile;
const nameInput = profileForm.querySelector('.popup__input_type_name');
const aboutInput = profileForm.querySelector('.popup__input_type_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

// 9. открытие формы редактирования профиля
function popupProfileOpen() {
  popupProfile.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

// 10. закрытие формы редактирования профиля
closePopupBtn.addEventListener('click', () => closePopup(popupProfile));

popupProfile.addEventListener('click', function(event){
  if(event.target === event.currentTarget) {
    closePopup (popupProfile)
  }
});

// 11. редактирование профиля
function profileSubmit (evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup (popupProfile);
}

openProfileBtn.addEventListener('click', popupProfileOpen);
profileForm.addEventListener('submit', profileSubmit);
