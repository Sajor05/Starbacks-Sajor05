const formulario = document.getElementById("register");

function data(username, adress, pass, verify_pass) {
  return username && adress && pass && verify_pass;
}

function verifyPassword(pass, verify_pass) {
  return pass === verify_pass;
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
    const verify_password = document.getElementById("password-2").value;

    if (data(userName, adress, password, verify_password)) {
      if (verifyPassword(password, verify_password)) {
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
