import iconsData from "../data/iconsData.js";
import populateExpenses from "./populateExpenses.js";

export default function populateIcons() {
  const categoryIcons = document.getElementById("category-icon-container");

  let id = 0;

  //populates the icons that will immediately reference the clicked button the moment it's being created.
  iconsData.forEach((iconObj) => {
    const button = document.createElement("button");
    button.classList.add("material-symbols-outlined");
    button.classList.add("category-icon");
    button.textContent = iconObj.icon;

    if (iconObj.type === "edit") {
      button.id = "gear-icon";
      button.classList.add("gear-icon");
      categoryIcons.appendChild(button);
    }

    if (iconObj.type === "category") {
      button.id = `category-btn-${id}`;
      categoryIcons.appendChild(button);
      button.addEventListener("click", () => {
        populateExpenses(iconObj.name);
      });
      id++;
    }
  });
}

//this method is less safe because it depends on the data being sourced and the it must reference to the element if I want to do anything with it which can cause slower prerformance. CreateElement is faster performance and safer than insertAdjacentHTML.

// if (iconObj.type === "edit") {
//   gearIcon.insertAdjacentHTML(
//     "beforeend",
//     `<span class="material-symbols-outlined">${iconObj.name}</span>`,
//   );
// }
// if (iconObj.type === "category") {
//   categoryIcon.insertAdjacentHTML(
//     "beforeend",
//     `<button id="category-btn-${id}" class="category-btn"><span class="material-symbols-outlined">${iconObj.name}</span></button>`,
//   );
//   const viewCategoryBtn = document.getElementById(`category-btn-${id}`);
//   viewCategoryBtn.addEventListener("click", () => {
//     testing.textContent += iconObj.name;
//   });
//   id++;
// }
