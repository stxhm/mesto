(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const t=function(){function t(e){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=function(e){o._buttonSubmit.textContent=e},(n="_handleLoading")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this),this._buttonSubmit=this._popup.querySelector(".popup__button")}var n,r;return n=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){e.preventDefault(),"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(){e.close()})),this._popup.addEventListener("click",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&e(n.prototype,r),t}();function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return(o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const u=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(f,e);var t,n,u,l,s=(u=f,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=c(u);if(l){var n=c(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return a(this,e)});function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=s.call(this,e))._cardImage=t._popup.querySelector(".popup-image__image"),t._cardImageName=t._popup.querySelector(".popup-image__name"),t}return t=f,(n=[{key:"open",value:function(e){this._cardImage.src=e.link,this._cardImage.alt="фотография ".concat(e.name),this._cardImageName.innerText=e.name,this._cardImage.addEventListener("click",o(c(f.prototype),"open",this).call(this))}}])&&r(t.prototype,n),f}(t);function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const s=function(){function e(t){var n=t.profileName,r=t.profileAbout,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._about=r,this._avatar=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._avatar.src=e.avatar,this._avatar.alt=e.name}}])&&l(t.prototype,n),e}();function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleSubmitForm=r,t._popupForm=t._popup.querySelector(".popup__form"),t._inputs=Array.from(t._popupForm.querySelectorAll(".popup__input")),t}return t=a,(n=[{key:"getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;d(y(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleLoading("Сохранение..."),e._handleSubmitForm(e.getInputValues()),e.close()}))}},{key:"open",value:function(){d(y(a.prototype),"open",this).call(this),this._handleLoading("Сохранить")}},{key:"close",value:function(){this._popupForm.reset(),d(y(a.prototype),"close",this).call(this)}}])&&p(t.prototype,n),a}(t);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const g=function(){function e(t,n,r,o){var i=this,a=o.handleCardClick,c=o.handleCardDelete,u=o.handleAddLike,l=o.handleDeleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),S(this,"likeHandler",(function(){i._card.querySelector(".card__like").classList.toggle("card__like_liked")})),S(this,"_showLike",(function(){i._card.querySelector(".card__like").classList.contains("card__like_liked")?i._handleDeleteLike():i._handleAddLike()})),S(this,"deleteHandler",(function(){i._card.remove(),i._card=null})),S(this,"_setListeners",(function(){i._card.querySelector(".card__like").addEventListener("click",i._showLike),i._card.querySelector(".card__delete").addEventListener("click",(function(){return i._handleCardDelete(i._card)})),i._card.querySelector(".card__image").addEventListener("click",(function(){return i._handleCardClick(i._link,i._name)}))})),S(this,"getCard",(function(){return i._card.querySelector(".card__title").textContent=i._name,i._card.querySelector(".card__image").src=i._link,i._card.querySelector(".card__image").alt="фотография ".concat(i._name),i._card.querySelector(".card__like-counter").textContent=i._like.length,i._like.find((function(e){return e._id===i._myId}))&&i._card.querySelector(".card__like").classList.add("card__like_liked"),i._owner._id===i._myId?i._card.querySelector(".card__delete").style.display="block":i._card.querySelector(".card__delete").style.display="none",i._setListeners(),i._card})),this._myId=t,this._owner=n.owner,this._name=n.name,this._link=n.link,this._like=n.likes,this._cardSelector=r,this._handleCardClick=a,this._handleCardDelete=c,this._handleAddLike=u,this._handleDeleteLike=l,this._card=document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}var t,n;return t=e,(n=[{key:"showLikeCounter",value:function(e){this._card.querySelector(".card__like-counter").textContent=e.length}}])&&v(t.prototype,n),e}();function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const E=function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),k(this,"_setCustomError",(function(e){var t=e.validity,n=e.value.length,r=e.getAttribute("minlength"),o=e.getAttribute("maxlength");e.setCustomValidity(""),(t.tooShort||t.tooLong)&&e.setCustomValidity("Строка имеет неверную длину. Введено символов: ".concat(n,", нужно от ").concat(r," до ").concat(o)),0===n&&e.setCustomValidity("Вы пропустили это поле"),t.typeMismatch&&e.setCustomValidity("Введите адрес сайта")})),k(this,"_setFieldError",(function(e){r._form.querySelector("#".concat(e.id,"-error")).textContent=e.validationMessage})),k(this,"_setSubmitButtonState",(function(){r._form.checkValidity()?(r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.removeAttribute("disabled")):(r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.setAttribute("disabled",!0))})),k(this,"_setInputState",(function(e){e.checkValidity()?e.classList.remove(r._inputErrorClass):e.classList.add(r._inputErrorClass)})),k(this,"_handleFormSubmit",(function(e){e.preventDefault();var t=e.currentTarget;t.checkValidity()&&(t.reset(),r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.setAttribute("disabled",!0))})),k(this,"_handleFormInput",(function(e){var t=e.target;r._setCustomError(t),r._setFieldError(t),r._setSubmitButtonState(r._form),r._setInputState(t)})),k(this,"enableValidation",(function(){r._form.addEventListener("submit",(function(){return r._handleFormSubmit(event)})),r._form.addEventListener("input",(function(){return r._handleFormInput(event)}))})),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._form=n,this._buttonElement=this._form.querySelector(this._submitButtonSelector)};function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const L=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),C(this,"setAvatar",(function(e){return fetch("".concat(n._url,"/users/me/avatar"),{method:"PATCH",headers:n._headers,body:JSON.stringify({avatar:e.link})}).then(n._handleResponse).catch(n._handleResponseError)})),C(this,"getUserInfo",(function(){return fetch("".concat(n._url,"/users/me"),{headers:n._headers}).then(n._handleResponse).catch(n._handleResponseError)})),C(this,"setUserInfo",(function(e){return fetch("".concat(n._url,"/users/me"),{method:"PATCH",headers:n._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(n._handleResponse).catch(n._handleResponseError)})),C(this,"getInitialCards",(function(){return fetch("".concat(n._url,"/cards"),{headers:n._headers}).then(n._handleResponse).catch(n._handleResponseError)})),C(this,"setCard",(function(e){return fetch("".concat(n._url,"/cards"),{method:"POST",headers:n._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(n._handleResponse).catch(n._handleResponseError)})),C(this,"deleteCard",(function(e){return fetch("".concat(n._url,"/cards/").concat(e),{method:"DELETE",headers:n._headers}).then(n._handleResponse).catch(n._handleResponseError)})),C(this,"setLike",(function(e){return fetch("".concat(n._url,"/cards/likes/").concat(e),{method:"PUT",headers:n._headers}).then(n._handleResponse).catch(n._handleResponseError)})),C(this,"deleteLike",(function(e){return fetch("".concat(n._url,"/cards/likes/").concat(e),{method:"DELETE",headers:n._headers}).then(n._handleResponse).catch(n._handleResponseError)})),this._url=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"_handleResponseError",value:function(e){return console.log("Error"),Promise.reject(e.message)}}])&&w(t.prototype,n),e}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t,n){return(q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(){return R(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;q(A(a.prototype),"setEventListeners",this).call(this),this._popup.querySelector(".popup__button").addEventListener("click",(function(){e._handleSubmit(),e._handleLoading("Удаление...")}))}},{key:"setSubmitAction",value:function(e){this._handleSubmit=e}},{key:"open",value:function(){q(A(a.prototype),"open",this).call(this),this._handleLoading("Да")}}])&&j(t.prototype,n),a}(t);var B={formSelector:".popup__form",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_invalid"},x={myId:"d9a288cf09e2cfc4949b2ef3",baseUrl:"https://mesto.nomoreparties.co/v1/cohort-26",headers:{authorization:"e7f3e8e1-45dc-42a8-aa6f-a9dfa39b7b98","Content-Type":"application/json"}},D=document.querySelector(".profile__name"),F=document.querySelector(".profile__about"),V=document.querySelector(".profile__edit"),U=document.querySelector(".profile__add-button"),N=document.querySelector(".popup_type_edit-profile"),H=N.querySelector(".popup__input_type_name"),J=N.querySelector(".popup__input_type_about"),M=N.querySelector("form"),z=document.querySelector(".popup_type_new-card").querySelector("form"),G=document.querySelector(".profile__avatar-button"),K=document.querySelector(".profile__avatar"),Q=document.querySelector(".popup_type_edit-avatar").querySelector("form"),W=new L(x),X=new T(".popup-confirm");function Y(e){var t=new g(x.myId,e,".template-card",{handleCardClick:function(){return Z.open(e)},handleCardDelete:function(){X.setSubmitAction((function(){W.deleteCard(e._id).then((function(){t.deleteHandler(),X.close()}))})),X.open()},handleAddLike:function(){W.setLike(e._id).then((function(e){t.showLikeCounter(e.likes),t.likeHandler()}))},handleDeleteLike:function(){W.deleteLike(e._id).then((function(e){t.showLikeCounter(e.likes),t.likeHandler()}))}});re.addItem(t.getCard())}X.setEventListeners();var Z=new u(".popup-image");Z.setEventListeners();var $=new s({profileName:D,profileAbout:F,profileAvatar:K});W.getUserInfo().then((function(e){$.setUserInfo(e),$.setUserAvatar(e)}));var ee=new m({popupSelector:".popup_type_edit-profile",handleSubmitForm:function(){var e=ee.getInputValues();W.setUserInfo(e).then((function(e){return $.setUserInfo(e)}))}});ee.setEventListeners(),V.addEventListener("click",(function(){var e=$.getUserInfo();H.value=e.name,J.value=e.about,ee.open()}));var te=new m({popupSelector:".popup_type_new-card",handleSubmitForm:function(){var e=te.getInputValues();W.setCard(e).then((function(e){return Y(e)}))}});te.setEventListeners(),U.addEventListener("click",(function(){te.open()}));var ne=new m({popupSelector:".popup_type_edit-avatar",handleSubmitForm:function(){var e=ne.getInputValues();W.setAvatar(e).then((function(e){$.setUserAvatar(e)}))}});ne.setEventListeners(),G.addEventListener("click",(function(){ne.open()}));var re=new function e(t,n){var r=this,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,"renderItems",(function(e){e.reverse().forEach((function(e){r._renderer(e)}))})),b(this,"addItem",(function(e){r._container.prepend(e)})),this._renderer=o,this._container=document.querySelector(n)}({items:W.getInitialCards,renderer:function(e){Y(e)}},".cards");W.getInitialCards().then((function(e){re.renderItems(e)}));var oe=new E(B,M),ie=new E(B,z),ae=new E(B,Q);oe.enableValidation(),ie.enableValidation(),ae.enableValidation()})();