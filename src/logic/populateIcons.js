import iconsData from "../data/iconsData.js";
// import viewCategory from "./viewCategory.js";

export default function populateIcons() {
  const gearIcon = document.getElementById("gear-icon");
  const categoryIcon = document.getElementById("category-icon-container");
  const viewCategoryBtn = document.getElementById("category-btn");

  //populates the icons
  iconsData.forEach((iconObj) => {
    if (iconObj.type === "edit") {
      gearIcon.innerHTML = `<span class="material-symbols-outlined">${iconObj.name}</span>`;
    }
    if (iconObj.type === "category") {
      categoryIcon.innerHTML += `<button id="category-btn"><span class="material-symbols-outlined">${iconObj.name}</span></button>`;
    }
  });

  //view categories when clicking on the category icons
  const testing = document.getElementById("test");
  viewCategoryBtn.addEventListener("click", (event) => {
    const btnValue = event.target.value;
    testing.innerHTML += `${btnValue}`;
  });
}
