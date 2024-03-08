const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const navbarLinks = document.querySelectorAll(".navbar-links");
const navbarMenu = document.getElementById("navbar-menu");
const overlay = document.getElementById("overlay");
const mobileMenuIcon = document.getElementById("mobile-menu-icon");
const text = document.getElementById("hero-text");
const button = document.querySelector(".hero-button");

//DISPLAYS OVERLAY WHEN ICON IS CLICKED
mobileMenuIcon.addEventListener("click", () => {
  overlay.classList.toggle("active");
  navbarMenu.classList.toggle("active");
  if (overlay.classList.contains("active")) {
    text.style.color = "rgba(255, 255, 255, 0.1)";
    button.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
  } else {
    text.style.color = "white";
    button.style.backgroundColor = "goldenrod";
  }
});

//COLLAPSES NAVBAR-MENU AND REMOVES OVERLAY WHEN IN MOBILE VIEW AND MOBILE-MENU-TOGGLE CHECKBOX IS CHECKED
navbarLinks.forEach((navbarLink) => {
  navbarLink.addEventListener("click", () => {
    console.log(mobileMenuToggle.checked);
    if (window.innerWidth < 960 && mobileMenuToggle.checked == true) {
      toggleNavbarMenu();
    }
  });
});

function toggleNavbarMenu() {
  navbarMenu.classList.toggle("active");
  overlay.classList.toggle("active");
  text.style.color = "white";
  button.style.backgroundColor = "goldenrod";
  mobileMenuToggle.checked = false;
}

// CHANGE NAVBAR BACKGROUND ON SCROLL
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const originalColor = window.getComputedStyle(navbar).backgroundColor;

  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 0) navbar.style.backgroundColor = "black";
    else navbar.style.backgroundColor = originalColor;
  });
});
