const navbarLinks = document.querySelectorAll(".mobile-menu .navbar-link, .mobile-menu .order-button");
const navbarMenu = document.getElementById("navbar-menu");
const mobileMenuIcon = document.getElementById("mobile-menu-icon");
const mobileMenuContainer = document.getElementById("mobile-menu-container");
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const nav = document.querySelector("nav");

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

// CHANGE NAVBAR BACKGROUND ON SCROLL
window.addEventListener("scroll", () => {
  if(window.scrollY > 60) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
