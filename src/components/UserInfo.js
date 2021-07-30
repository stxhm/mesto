class UserInfo {
  constructor ({ profileName, profileAbout, profileAvatar}) {
    this._name = profileName;
    this._about = profileAbout;
    this._avatar = profileAvatar;
  }

  getUserInfo() {
    const user = {
      name: this._name.textContent,
      about: this._about.textContent,
      avatar: this._avatar.src
    };
    return user;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
  }

  setUserAvatar(data) {
    this._avatar.src = data.avatar;
    this._avatar.alt = data.name;
  }
}

export default UserInfo;