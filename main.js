(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const t=function(){function t(e){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=function(e){e.preventDefault(),"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(e)}var n,r;return n=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(){e.close()})),this._popup.addEventListener("click",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&e(n.prototype,r),t}();function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return(o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const u=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(f,e);var t,n,u,l,s=(u=f,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=c(u);if(l){var n=c(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return a(this,e)});function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=s.call(this,e))._cardImage=t._popup.querySelector(".popup-image__image"),t._cardImageName=t._popup.querySelector(".popup-image__name"),t}return t=f,(n=[{key:"open",value:function(e){this._cardImage.src=e.link,this._cardImage.alt="фотография ".concat(e.name),this._cardImageName.innerText=e.name,this._cardImage.addEventListener("click",o(c(f.prototype),"open",this).call(this))}}])&&r(t.prototype,n),f}(t);function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const s=function(){function e(t){var n=t.profileName,r=t.profileAbout,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._about=r,this._avatar=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._avatar.src=e.avatar,this._avatar.alt=e.name}}])&&l(t.prototype,n),e}();function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),m(y(t=i.call(this,n)),"_handleLoading",(function(e){t._buttonSubmit.textContent=e})),m(y(t),"_submitEventHandler",(function(e){e.preventDefault(),t._handleLoading("Сохранение..."),t._handleSubmitForm(t.getInputValues())})),t._handleSubmitForm=r,t._popupForm=t._popup.querySelector(".popup__form"),t._inputs=Array.from(t._popupForm.querySelectorAll(".popup__input")),t._buttonSubmit=t._popup.querySelector(".popup__button"),t}return t=a,(n=[{key:"getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){this._popupForm.addEventListener("submit",this._submitEventHandler),d(b(a.prototype),"setEventListeners",this).call(this)}},{key:"open",value:function(){d(b(a.prototype),"open",this).call(this),this._handleLoading("Сохранить")}},{key:"close",value:function(){d(b(a.prototype),"close",this).call(this),this._popupForm.reset()}}])&&p(t.prototype,n),a}(t);function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const w=function(){function e(t,n,r,o){var i=this,a=o.handleCardClick,c=o.handleCardDelete,u=o.handleAddLike,l=o.handleDeleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),k(this,"likeHandler",(function(){i._card.querySelector(".card__like").classList.toggle("card__like_liked")})),k(this,"_showLike",(function(){i._card.querySelector(".card__like").classList.contains("card__like_liked")?i._handleDeleteLike():i._handleAddLike()})),k(this,"deleteHandler",(function(){i._card.remove(),i._card=null})),k(this,"_setListeners",(function(){i._card.querySelector(".card__like").addEventListener("click",i._showLike),i._card.querySelector(".card__delete").addEventListener("click",(function(){return i._handleCardDelete(i._card)})),i._card.querySelector(".card__image").addEventListener("click",(function(){return i._handleCardClick(i._link,i._name)}))})),k(this,"getCard",(function(){return i._card.querySelector(".card__title").textContent=i._name,i._card.querySelector(".card__image").src=i._link,i._card.querySelector(".card__image").alt="фотография ".concat(i._name),i._card.querySelector(".card__like-counter").textContent=i._like.length,i._like.find((function(e){return e._id===i._myId}))&&i._card.querySelector(".card__like").classList.add("card__like_liked"),i._owner._id===i._myId?i._card.querySelector(".card__delete").style.display="block":i._card.querySelector(".card__delete").style.display="none",i._setListeners(),i._card})),this._myId=t,this._owner=n.owner,this._name=n.name,this._link=n.link,this._like=n.likes,this._cardSelector=r,this._handleCardClick=a,this._handleCardDelete=c,this._handleAddLike=u,this._handleDeleteLike=l,this._card=document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}var t,n;return t=e,(n=[{key:"showLikeCounter",value:function(e){this._card.querySelector(".card__like-counter").textContent=e.length}}])&&S(t.prototype,n),e}();function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const C=function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),E(this,"_setCustomError",(function(e){var t=e.validity,n=e.value.length,r=e.getAttribute("minlength"),o=e.getAttribute("maxlength");e.setCustomValidity(""),(t.tooShort||t.tooLong)&&e.setCustomValidity("Строка имеет неверную длину. Введено символов: ".concat(n,", нужно от ").concat(r," до ").concat(o)),0===n&&e.setCustomValidity("Вы пропустили это поле"),t.typeMismatch&&e.setCustomValidity("Введите адрес сайта")})),E(this,"_setFieldError",(function(e){r._form.querySelector("#".concat(e.id,"-error")).textContent=e.validationMessage})),E(this,"_setSubmitButtonState",(function(){r._form.checkValidity()?(r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.removeAttribute("disabled")):(r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.setAttribute("disabled",!0))})),E(this,"_setInputState",(function(e){e.checkValidity()?e.classList.remove(r._inputErrorClass):e.classList.add(r._inputErrorClass)})),E(this,"_handleFormInput",(function(e){var t=e.target;r._setCustomError(t),r._setFieldError(t),r._setSubmitButtonState(r._form),r._setInputState(t)})),E(this,"enableValidation",(function(){r._form.addEventListener("input",(function(){return r._handleFormInput(event)}))})),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._form=n,this._buttonElement=this._form.querySelector(this._submitButtonSelector)};function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const j=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),O(this,"setAvatar",(function(e){return fetch("".concat(n._url,"/users/me/avatar"),{method:"PATCH",headers:n._headers,body:JSON.stringify({avatar:e.link})}).then(n._handleResponse)})),O(this,"getUserInfo",(function(){return fetch("".concat(n._url,"/users/me"),{headers:n._headers}).then(n._handleResponse)})),O(this,"setUserInfo",(function(e){return fetch("".concat(n._url,"/users/me"),{method:"PATCH",headers:n._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(n._handleResponse)})),O(this,"getCards",(function(){return fetch("".concat(n._url,"/cards"),{headers:n._headers}).then(n._handleResponse)})),O(this,"getInitialData",(function(){return Promise.all([n.getUserInfo(),n.getCards()])})),O(this,"setCard",(function(e){return fetch("".concat(n._url,"/cards"),{method:"POST",headers:n._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(n._handleResponse)})),O(this,"deleteCard",(function(e){return fetch("".concat(n._url,"/cards/").concat(e),{method:"DELETE",headers:n._headers}).then(n._handleResponse)})),O(this,"setLike",(function(e){return fetch("".concat(n._url,"/cards/likes/").concat(e),{method:"PUT",headers:n._headers}).then(n._handleResponse)})),O(this,"deleteLike",(function(e){return fetch("".concat(n._url,"/cards/likes/").concat(e),{method:"DELETE",headers:n._headers}).then(n._handleResponse)})),this._url=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject(e.status)}}])&&L(t.prototype,n),e}();function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t,n){return(I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?T(e):t}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function a(e){var t,n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),o=function(e){t._buttonSubmit.textContent=e},(r="_handleLoading")in(n=T(t=i.call(this,e)))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,t._buttonSubmit=t._popup.querySelector(".popup__button"),t}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;I(x(a.prototype),"setEventListeners",this).call(this),this._popup.querySelector(".popup__button").addEventListener("click",(function(){e._handleSubmit(),e._handleLoading("Удаление...")}))}},{key:"setSubmitAction",value:function(e){this._handleSubmit=e}},{key:"open",value:function(){I(x(a.prototype),"open",this).call(this),this._handleLoading("Да")}}])&&P(t.prototype,n),a}(t);var D={formSelector:".popup__form",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_invalid"},U=document.querySelector(".profile__name"),V=document.querySelector(".profile__about"),F=document.querySelector(".profile__edit"),H=document.querySelector(".profile__add-button"),N=document.querySelector(".popup_type_edit-profile"),J=N.querySelector(".popup__input_type_name"),M=N.querySelector(".popup__input_type_about"),z=N.querySelector("form"),$=document.querySelector(".popup_type_new-card").querySelector("form"),G=$.querySelector(".popup__button"),K=document.querySelector(".profile__avatar-button"),Q=document.querySelector(".profile__avatar"),W=document.querySelector(".popup_type_edit-avatar").querySelector("form");function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Y=null,Z=new j({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-26",headers:{authorization:"e7f3e8e1-45dc-42a8-aa6f-a9dfa39b7b98","Content-Type":"application/json"}}),ee=new s({profileName:U,profileAbout:V,profileAvatar:Q}),te=new function e(t,n){var r=this,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),g(this,"renderItems",(function(e){e.reverse().forEach((function(e){r._renderer(e)}))})),g(this,"addItem",(function(e){r._container.prepend(e)})),this._renderer=o,this._container=document.querySelector(n)}({renderer:function(e){re(e)}},".cards"),ne=new B(".popup-confirm");function re(e){var t=new w(Y,e,".template-card",{handleCardClick:function(){return oe.open(e)},handleCardDelete:function(){ne.setSubmitAction((function(){Z.deleteCard(e._id).then((function(){t.deleteHandler(),ne.close()})).catch((function(e){return console.log(e)}))})),ne.open()},handleAddLike:function(){Z.setLike(e._id).then((function(e){t.showLikeCounter(e.likes),t.likeHandler()})).catch((function(e){return console.log(e)}))},handleDeleteLike:function(){Z.deleteLike(e._id).then((function(e){t.showLikeCounter(e.likes),t.likeHandler()})).catch((function(e){return console.log(e)}))}});te.addItem(t.getCard())}ne.setEventListeners(),Z.getInitialData().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Y=o._id,ee.setUserInfo(o),ee.setUserAvatar(o),te.renderItems(i)})).catch((function(e){return console.log(e)}));var oe=new u(".popup-image");oe.setEventListeners();var ie=new v({popupSelector:".popup_type_edit-profile",handleSubmitForm:function(){var e=ie.getInputValues();Z.setUserInfo(e).then((function(e){ee.setUserInfo(e),ie.close()})).catch((function(e){return console.log(e)}))}});ie.setEventListeners(),F.addEventListener("click",(function(){var e=ee.getUserInfo();J.value=e.name,M.value=e.about,ie.open()}));var ae=new v({popupSelector:".popup_type_new-card",handleSubmitForm:function(){var e=ae.getInputValues();Z.setCard(e).then((function(e){re(e)})).catch((function(e){return console.log(e)})).finally((function(){return ae.close()}))}});ae.setEventListeners(),H.addEventListener("click",(function(){ae.open(),G.classList.add("popup__button_disabled"),G.setAttribute("disabled",!0)}));var ce=new v({popupSelector:".popup_type_edit-avatar",handleSubmitForm:function(){var e=ce.getInputValues();Z.setAvatar(e).then((function(e){ee.setUserAvatar(e),ce.close()})).catch((function(e){return console.log(e)}))}});ce.setEventListeners(),K.addEventListener("click",(function(){ce.open()}));var ue=new C(D,z),le=new C(D,$),se=new C(D,W);ue.enableValidation(),le.enableValidation(),se.enableValidation()})();