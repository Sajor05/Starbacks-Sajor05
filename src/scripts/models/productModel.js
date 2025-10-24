export class Product {
  constructor(title, img, price) {
    this.title = title;
    this.img = img;
    this.price = price;
  }

  productCard() {
    return `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="contenedor-producto text-center">
          <div class="header-contenedor-producto">
            <h5 class="package-titulo">${this.title}</h5>
          </div>

          <br /><br />

          <div class="contenedor-cuerpo">
            <img
              class="img-fluid w-100"
              src="${this.img}"
              alt="${this.title}"
            />
          </div>

          <br />
          <div class="text-center">
            <p class="fw-bold">$${this.price}</p>
            <a href="#" class="boton-comprar fw-bold">Agregar al carrito</a>
          </div>
          <br />
        </div>
      </div>
    `;
  }
}
