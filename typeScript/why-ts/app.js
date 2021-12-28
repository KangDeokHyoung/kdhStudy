// api url
var url = "https://jsonplaceholder.typicode.com/users/1";

// dom
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};

function fetchUser() {
  return axios.get(url);
}

/**
 * @typedef {object} user
 * @property {string} name
 * @property {string} email
 * @property {string} address
 */

/**
 * @returns{Proise<User>}
 */

fetchUser().then(function (response) {
  response.address.city;
});

function startApp() {
  fetchUser()
    .then(function (response) {
      // console.log(response);
      user = response.data;
      console.log(user);
      username.innerText = user.name;
      email.innerText = user.email;
      address.innerText = user.address.street;

      // TODO: 이름, 이메일, 주소 표시하기
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
