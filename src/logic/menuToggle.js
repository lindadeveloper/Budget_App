const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const xIcon = document.getElementById("x-icon");

let menuOpen = false;

export function menuToggle() {
  xIcon.addEventListener("click", menuState);
  menuBtn.addEventListener("click", menuState);
}

function menuState() {
  menuOpen = !menuOpen;
  menuBtn.textContent = menuOpen ? "close" : "menu";
  sidebar.classList.toggle("hidden");
}
