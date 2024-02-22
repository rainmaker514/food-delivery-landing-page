const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const navbarLinks = document.querySelectorAll(".navbar-links");
const navbarMenu = document.getElementById("navbar-menu");
const overlay = document.getElementById("overlay");
const mobileMenuIcon = document.getElementById("mobile-menu-icon");

//DISPLAYS OVERLAY WHEN ICON IS CLICKED
mobileMenuIcon.addEventListener("click", () => {
  overlay.style.display = "none";
  if (mobileMenuToggle.checked == false) overlay.style.display = "block";
});

//COLLAPSES NAVBAR-MENU AND REMOVES OVERLAY WHEN IN MOBILE VIEW AND MOBILE-MENU-TOGGLE CHECKBOX IS CHECKED
navbarLinks.forEach((navbarLink) => {
  navbarLink.addEventListener("click", () => {
    console.log(mobileMenuToggle.checked);
    if (window.innerWidth < 960 && mobileMenuToggle.checked == true) {
      overlay.style.display = "none";
      mobileMenuToggle.checked = false;
    }
  });
});
