let submitBtn = document.getElementById("submit-btn");
const username = document.getElementById("username");
let nameError = document.getElementById("name-error");
let password = document.getElementById("password");
let passError = document.getElementById("pass-error");
let form = document.querySelector("form");
submitBtn.addEventListener("click", (e) => {
  if (username.value === "" || username.value == null) {
    nameError.innerText = "username is requird";
    nameError.classList.add("show");
    e.preventDefault();
  } else {
    nameError.classList.remove("show");
  }
  if (password.value.length == 0) {
    passError.innerText = "password is requird";
    passError.classList.add("show");
    e.preventDefault();
  }else if (password.value.length < 8) {
    passError.innerText = "password must be longer than 8 characters";
    passError.classList.add("show");
    e.preventDefault();
  } else {
    passError.classList.remove("show");
  }
});
let showPass = document.getElementById("btn");
showPass.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
  } else if (password.type == "text") {
    password.type = "password";
  }
  showPass.classList.toggle("fa-eye");
  showPass.classList.toggle("fa-eye-slash");
});
