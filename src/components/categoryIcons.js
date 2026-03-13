import icons from "./icons.js";

export default function populateIcons() {
  const gearIcon = document.getElementById("gear-icon");
  const categoryIcon = document.getElementById("category-icon-container");
  icons.forEach((iconObj) => {
    if (iconObj.type === "edit") {
      gearIcon.innerHTML = `<span class="material-symbols-outlined">${iconObj.name}</span>`;
    }
    if (iconObj.type === "category") {
      categoryIcon.innerHTML += `<button><span class="material-symbols-outlined">${iconObj.name}</span></button>`;
    }
  });
}
