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

// ===== SCROLL SECTION ACTIVE HEADER-LINK =====
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.header__menu a[href*= ${sectionId} ]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.header__menu a[href*= ${sectionId} ]`)
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// ===== STICKY HEADER =====
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
