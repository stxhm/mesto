// open/close popup
let openPopup = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close')

openPopup.addEventListener('click', toggleClass);
closePopup.addEventListener('click', toggleClass);

function toggleClass () {
  popup.classList.toggle('popup_opened');
}

popup.addEventListener('click', function(event){
  if(event.target === event.currentTarget) {
    toggleClass()
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
}

openPopup.addEventListener('click', popupOpen);
formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', toggleClass);
