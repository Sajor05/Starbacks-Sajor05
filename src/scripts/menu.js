import { products } from "./products.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".row");
  container.innerHTML = products.map((p) => p.productCard()).join("");
});
