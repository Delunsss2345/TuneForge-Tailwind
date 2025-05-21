const nav = document.querySelector(".nav");
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", (e) => {
  nav.classList.toggle("open");
  hamburger.classList.toggle("close");
});
