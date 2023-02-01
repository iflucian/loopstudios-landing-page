const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const topTitle = document.querySelector(".top-title");

hamburger.addEventListener("click", (e) => {
  nav.classList.add("show");
  hamburger.classList.add("hide");
  close.classList.add("show");
  header.style.background = "#000";
  topTitle.classList.add("hide");
});

close.addEventListener("click", (e) => {
  nav.classList.remove("show");
  hamburger.classList.remove("hide");
  close.classList.remove("show");
  header.style.background = "";
  topTitle.classList.remove("hide");
});
