const navbarLinks = document.querySelectorAll(".mobile-menu .navbar-link, .mobile-menu .order-button");
const navbarMenu = document.getElementById("navbar-menu");
const mobileMenuIcon = document.getElementById("mobile-menu-icon");
const mobileMenuContainer = document.getElementById("mobile-menu-container");
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
// const heroText = document.getElementById("hero-text");
// const button = document.querySelector(".hero-button");

//DISPLAYS OVERLAY WHEN ICON IS CLICKED
mobileMenuIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.toggle("active");
});

//COLLAPSES MOBILE MENU WHEN LINK IS CLICKED
navbarLinks.forEach((navbarLink) => {
  navbarLink.addEventListener("click", () => {
    mobileMenuContainer.classList.toggle("active");
    mobileMenuToggle.checked = false;
  });
});

// // CHANGE NAVBAR BACKGROUND ON SCROLL
// document.addEventListener("DOMContentLoaded", function () {
//   const nav = document.getElementById("nav");
//   const originalColor = window.getComputedStyle(nav).backgroundColor;

//   window.addEventListener("scroll", function () {
//     if (this.window.scrollY > 0) nav.style.backgroundColor = "black";
//     else nav.style.backgroundColor = originalColor;
//   });
// });
