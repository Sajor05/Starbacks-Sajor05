const formulario = document.getElementById("login");
const storedUser = localStorage.getItem("Username");
const storedPass = localStorage.getItem("Password");

function verify(user, pass) {
  if (!user || !pass) {
    alert("Completa todos los campos");
    formulario.reset();
  }
  if (user === storedUser && pass === storedPass) {
    window.location.href = "../../../../Home/index.html";
  } else {
    alert("Usuario o contraseña incorrectos");
    formulario.reset();
  }
}

function login() {
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const userName = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();
    verify(userName, password);
  });
}

login();
