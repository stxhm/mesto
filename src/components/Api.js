class Api {
  constructor(options){
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _handleResponse(res) {
    if (!res.ok) {
      return Promise.reject(res.status);
    }
    return res.json();
  }

  setAvatar = (data) => {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.link
      })
    })
    .then(this._handleResponse)
  }

  getUserInfo = () => {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
    .then(this._handleResponse)
  }

  setUserInfo = (data) => {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
    .then(this._handleResponse)
  }

  getCards = () => {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })
    .then(this._handleResponse)
  }

  getInitialData = () => {
    return Promise.all([this.getUserInfo(), this.getCards()]);
  }

  setCard = (data) => {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(this._handleResponse)
  }

  deleteCard = (id) => {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._handleResponse)
  }

  setLike = (id) => {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(this._handleResponse)
  }

  deleteLike = (id) => {
    return fetch(`${this._url}/cards/likes/${id}`,{
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._handleResponse)
  }
}

export default Api;