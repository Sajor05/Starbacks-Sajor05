import { ShopCart } from "./models/shopCartModel.js";

document.addEventListener("DOMContentLoaded", () => {
  const cart = new ShopCart();

  const cartSidebar = document.getElementById("cart-sidebar");
  const cartToggle = document.getElementById("cart-toggle");
  const closeCart = document.getElementById("close-cart");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");

  if (!cartSidebar || !cartToggle || !closeCart) {
    console.warn("No se encontró el sidebar o los botones del carrito.");
    return;
  }

  cartToggle.addEventListener("click", (e) => {
    e.preventDefault();
    cartSidebar.classList.add("open");
  });

  closeCart.addEventListener("click", () => {
    cartSidebar.classList.remove("open");
  });

  function renderCart() {
    cartItems.innerHTML = "";
    cart.cart.forEach((product, index) => {
      const li = document.createElement("li");
      li.className =
        "list-group-item d-flex justify-content-between align-items-center";
      li.innerHTML = `
        ${product.title} - $${product.price}
        <button class="btn btn-sm btn-danger" data-index="${index}">X</button>
      `;
      cartItems.appendChild(li);
    });

    cartTotal.textContent = cart.totalPrice();
    cartCount.textContent = cart.cart.length;

    document.querySelectorAll("#cart-items button").forEach((btn) => {
      btn.addEventListener("click", () => {
        cart.remove(btn.dataset.index);
        renderCart();
      });
    });
  }

  function addProductToCart(product) {
    cart.add(product);
    renderCart();
  }
});

export function initCartSidebar() {
  const cartSidebar = document.getElementById("cart-sidebar");
  const cartToggle = document.querySelector(".nav-link.fw-bold[href='#']");
  const closeCart = document.getElementById("close-cart");

  if (!cartSidebar || !cartToggle || !closeCart) return;

  cartToggle.addEventListener("click", (e) => {
    e.preventDefault();
    cartSidebar.classList.add("open");
  });

  closeCart.addEventListener("click", () => {
    cartSidebar.classList.remove("open");
  });
}
