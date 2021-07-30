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

  _handleResponseError(err){
    console.log('Error');
    return Promise.reject(err.message);
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
    .catch(this._handleResponseError)
  }

  getUserInfo = () => {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
    .then(this._handleResponse)
    .catch(this._handleResponseError)
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
    .catch(this._handleResponseError)
  }

  getInitialCards = () => {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })
    .then(this._handleResponse)
    .catch(this._handleResponseError)
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
    .catch(this._handleResponseError)
  }

  deleteCard = (id) => {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._handleResponse)
    .catch(this._handleResponseError)
  }

  setLike = (id) => {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(this._handleResponse)
    .catch(this._handleResponseError)
  }

  deleteLike = (id) => {
    return fetch(`${this._url}/cards/likes/${id}`,{
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._handleResponse)
    .catch(this._handleResponseError)
  }
}

export default Api;