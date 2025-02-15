const searchBox = document.querySelector("#search-form");
const shoppingChart = document.querySelector("#shopping-chart");
const loginForm = document.querySelector("#login-form");
const nav = document.querySelector("#nav");

document.querySelector(".icon-search").addEventListener("click", function () {
  searchBox.classList.toggle("active-search");
});

document.querySelector(".icon-chart").addEventListener("click", function () {
  shoppingChart.classList.toggle("active-chart");
});

document.querySelector(".icon-profile").addEventListener("click", function () {
  loginForm.classList.toggle("login-active");
});

document.querySelector(".icon-bars").addEventListener("click", function () {
  nav.classList.toggle("nav-active");
});
