// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const h1S = document.querySelector("h1");

function onLoginSunmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  //   const USERNAME_KEY = "username";
  loginForm.classList.add("hidden");
  localStorage.setItem("username", username);
  paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSunmit);

function paintGreetings(text) {
  h1S.innerText = `Hello ${text}`;
  h1S.classList.remove("hidden");
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSunmit);
} else {
  paintGreetings(savedUsername);
}

export const test = 1;
