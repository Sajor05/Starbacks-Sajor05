const formulario = document.getElementById("register");

function verifyPassword(pass, pass2) {
  if (pass === pass2) {
    return true;
  } else {
    return false;
  }
}

function getData(user, adress, password) {
  localStorage.setItem("Username", user);
  localStorage.setItem("Adress", adress);
  localStorage.setItem("Password", password);
}

function register() {
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const userName = document.getElementById("username").value;
    const adress = document.getElementById("adress").value;
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password-2").value;

    if (userName && adress && password && password2) {
      if (verifyPassword(password, password2)) {
        getData(userName, adress, password);
        window.location.href = "../../../Home/index.html";
      } else {
        alert("Password does not match!");
        formulario.reset();
      }
    } else {
      formulario.reset();
    }
  });
}

register();
