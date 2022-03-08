import "../css/index.css";

// ===== Show Menu =====
function showMenu(menuId, toggleId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  toggle.onclick = () => {
    menu.classList.toggle("show-menu");
  };
}
showMenu("header-menu", "header-toggle");

// ===== STICKY HEADER =====
const scrollY = window.pageYOffset;

function stickyHeader() {
  const header = document.getElementById("header");

  this.scrollY > 10
    ? header.classList.add("sticky-header")
    : header.classList.remove("sticky-header");
}
window.addEventListener("scroll", stickyHeader);

// ===== SCROLLUP SECTION =====
function scrollUp() {
  const scrollup = document.getElementById("scroll-up");

  this.scrollY > 10
    ? scrollup.classList.add("scroll-action")
    : scrollup.classList.remove("scroll-action");
}
window.addEventListener("scroll", scrollUp);
