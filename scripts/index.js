// open/close popup
let openPopupBtn = document.querySelector('.profile__edit');
let closePopupBtn = document.querySelector('.popup__close')
let popup = document.querySelector('.popup');

function openPopup () {
  popup.classList.add('popup_opened');
}

function closePopup () {
  popup.classList.remove('popup_opened');
}

openPopupBtn.addEventListener('click', openPopup);
closePopupBtn.addEventListener('click', closePopup);

popup.addEventListener('click', function(event){
  if(event.target === event.currentTarget) {
    closePopup ()
  }
});

// profile edit
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_type_name');
let aboutInput = formElement.querySelector('.popup__input_type_about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

function popupOpen() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  let nameValue = nameInput.value;
  let aboutValue = aboutInput.value;
  profileName.textContent = nameValue;
  profileAbout.textContent = aboutValue;
  closePopup ();
}

openPopupBtn.addEventListener('click', popupOpen);
formElement.addEventListener('submit', formSubmitHandler);
