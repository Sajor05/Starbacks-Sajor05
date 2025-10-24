import { users } from "./users.js";

const formulario = document.getElementById("login");

function login() {
  if (!formulario) return;

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const userName = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();
    verify(userName, password);
  });
}

function verify(userName, pass) {
  const usuario = users.find((u) => u.username === userName);
  if (!usuario || usuario.password !== pass) {
    alert("Usuario o contraseña incorrectos");
    formulario.reset();
    return;
  }

  usuario.isLogged = true;
  localStorage.setItem("UsuarioLogueado", JSON.stringify(usuario));

  window.location.href = "../../Home/index.html";
}

login();
