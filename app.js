// Hire Me Button Alert
document.addEventListener("DOMContentLoaded", function () {
  const hireBtn = document.querySelector(".header-btn");

  hireBtn.addEventListener("click", function (e) {
    e.preventDefault(); // link jump stop karega

    alert(
      "Hi, I'm Fatima Rajput 👋\n\n" +
      "I am a Frontend Web Developer who creates modern, responsive, and user-friendly websites.\n\n" +
      "I work with HTML, CSS, JavaScript, Flexbox, and Grid.\n\n" +
      "Let’s build something amazing together 🚀"
    );
  });
});

//Humburger
let hamburger = document.getElementById("hamburger");
let nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});