export class ShopCart {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem("cart")) || [];
  }

  add(product) {
    this.cart.push(product);
    this.saveCart();
  }
  remove(product) {
    this.cart.slice(product);
    this.saveCart();
  }
  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }
  totalPrice() {
    return this.cart.reduce((acc, p) => acc + p.price, 0);
  }
}
