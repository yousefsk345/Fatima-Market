let username = document.getElementById("name");
let age = document.getElementById("age");
let password = document.getElementById("password");

username.innerText = localStorage.getItem("username");
age.innerText = localStorage.getItem("age");
password.innerText = localStorage.getItem("password");