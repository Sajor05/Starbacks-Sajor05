export class User {
  constructor(username, password, adress) {
    this.username = username;
    this.password = password;
    this.adress = adress;
    this.login = false;
  }

  logged() {
    this.login = true;
  }

  isLogged() {
    return this.login;
  }
}
