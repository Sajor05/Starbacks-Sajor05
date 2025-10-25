import { ShopCart } from "./shopCartModel.js";

export class User {
  constructor(username, password, adress) {
    this.username = username;
    this.password = password;
    this.adress = adress;
    this.login = false;
    this.cart = new ShopCart();
  }

  logged() {
    this.login = true;
  }
  logout() {
    this.login = false;
    this.cart.clear();
  }

  isLogged() {
    return this.login;
  }
}
