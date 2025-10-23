document.addEventListener("DOMContentLoaded", () => {
  const profileOrLogin = document.querySelector(".login-container");
  const user = localStorage.getItem("Username");

  /*----------------------------
  -- C E R R A R  S E S I O N --
  -----------------------------*/
  function logout() {
    const logout = document.getElementsByClassName("logout");
    logout.addEventListener("click", () => {
      localStorage.removeItem("Username");
      localStorage.removeItem("Password");
      location.reload();
    });
  }

  /*----------------------------
  -- M O S T R A R  P E R F I L --
  -----------------------------*/
  function profile() {
    if (!profileOrLogin) return;

    if (user) {
      profileOrLogin.innerHTML = `
        <li class="nav-item dropdown list-unstyled">
            <a class="nav-link dropdown-toggle fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                ${user.toUpperCase()}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Perfil</a></li>
                <li><a class="dropdown-item" href="#">Mis pedidos</a></li>
                <li><button class="logout dropdown-item" onclick="localStorage.clear();" href="#">Cerrar sesion</button></li>
            </ul>
        </li>
      `;
      logout();
    }
  }

  profile();
});
