// const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
// const navbarLinks = document.querySelectorAll(".navbar-links");
const navbarMenu = document.getElementById("navbar-menu");
// const overlayHero = document.getElementById("overlay-hero");
// const overlay = document.getElementById("overlay");
const mobileMenuIcon = document.getElementById("mobile-menu-icon");
const mobileMenuContainer = document.getElementById("mobile-menu-container");
// const heroText = document.getElementById("hero-text");
// const button = document.querySelector(".hero-button");

//DISPLAYS OVERLAY WHEN ICON IS CLICKED
mobileMenuIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.toggle("active");
});

//COLLAPSES NAVBAR-MENU AND REMOVES OVERLAY WHEN IN MOBILE VIEW AND MOBILE-MENU-TOGGLE CHECKBOX IS CHECKED
// navbarLinks.forEach((navbarLink) => {
//   navbarLink.addEventListener("click", () => {
//     console.log(mobileMenuToggle.checked);
//     if (window.innerWidth < 960 && mobileMenuToggle.checked == true) {
//       toggleNavbarMenu();
//     }
//   });
// });

// function toggleNavbarMenu() {
//   navbarMenu.classList.toggle("active");
//   overlayHero.classList.toggle("active");
//   overlay.classList.toggle("active");
//   heroText.style.color = "white";
//   button.style.backgroundColor = "goldenrod";
//   mobileMenuToggle.checked = false;
// }

// // CHANGE NAVBAR BACKGROUND ON SCROLL
// document.addEventListener("DOMContentLoaded", function () {
//   const nav = document.getElementById("nav");
//   const originalColor = window.getComputedStyle(nav).backgroundColor;

//   window.addEventListener("scroll", function () {
//     if (this.window.scrollY > 0) nav.style.backgroundColor = "black";
//     else nav.style.backgroundColor = originalColor;
//   });
// });
