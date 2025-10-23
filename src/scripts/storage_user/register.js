import { User } from "../models/userModel.js";
import { users } from "./users.js";

const formulario = document.getElementById("register");

/*-------------------------------------
-- L O G I C A  D E  R E G I S T R O --
--------------------------------------*/

//Logica de registrarse
function register() {
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    //D A T O S
    const userName = document.getElementById("username").value;
    const adress = document.getElementById("adress").value;
    const password = document.getElementById("password").value;
    const verify_password = document.getElementById("password-2").value;
    //N U E V O  U S U A R I O
    let user = new User(userName, password, adress);

    if (data(user, verify_password)) {
      verify(user, verify_password);
    } else {
      alert("Completa todos los campos!");
      formulario.reset();
    }
  });
}

//Verificamos si la contraseña del usuario coincide con la constraseña de verificación o si el usuario ya existe,
//si es asi se registra y se lo manda a la página principal
function verify(user, pass2) {
  if (!verifyPassword(user.password, pass2)) {
    alert("Las contraseñas no coinciden!");
    formulario.reset();
    return;
  } else if (existe(user)) {
    alert("Ese usuario ya existe!");
    formulario.reset();
    return;
  }
  setData(user);
  window.location.href = "../../Home/index.html";
}

function existe(user) {
  return users.some((u) => u.username == user.username);
}

//Verificación de contraseñas
function verifyPassword(pass, verify_pass) {
  return pass === verify_pass;
}

//Comprueba que haya información
function data(user, pass2) {
  return user.username && user.adress && user.password && pass2;
}

//Setter del usuario
function setData(user) {
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

register();
