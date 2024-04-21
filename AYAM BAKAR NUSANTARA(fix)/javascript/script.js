const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

document.addEventListener("click", function (e) {
  if (!menuToggle.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("slide");
  }
});
