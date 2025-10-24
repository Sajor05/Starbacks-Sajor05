document.addEventListener("DOMContentLoaded", () => {
  const state = document.querySelector(".login-container");
  if (!state) return;

  const usuario = JSON.parse(localStorage.getItem("UsuarioLogueado"));
  if (!usuario || !usuario.isLogged) return;

  state.innerHTML = `
    <ul class="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
      <li class="nav-item dropdown">
        <a class="nav-link active dropdown-toggle fw-bold" href="#" id="perfilDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          ${usuario.username.toUpperCase()}
        </a>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="perfilDropdown">
          <li><a class="dropdown-item" href="../pages/Users/profile.html">Perfil</a></li>
          <li><a class="dropdown-item" href="#">Mis pedidos</a></li>
          <li><button class="dropdown-item text-danger" id="logout">Cerrar sesión</button></li>
        </ul>
      </li>
      <li class="nav-item ms-2">
        <a href="../pages/Cart/cart.html" class="nav-link active fw-bold">CARRITO</a>
      </li>
    </ul>
  `;

  const logout = document.getElementById("logout");
  if (logout) {
    logout.addEventListener("click", () => {
      localStorage.removeItem("UsuarioLogueado");
      window.location.href = "/src/Home/index.html";
    });
  }
});
