class UserInfo {
  constructor ({ profileName, profileAbout}) {
    this._name = profileName;
    this._about = profileAbout;
  }

  getUserInfo() {
    const user = {
      'name': this._name.textContent,
      'about': this._about.textContent
    };
    return user;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
  }
}

export default UserInfo;