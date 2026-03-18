import iconsData from "../data/iconsData.js";
import populateExpenses from "./populateExpenses.js";

export default function populateIcons() {
  const categoryIcons = document.getElementById("category-icon-container");

  let id = 0;

  //this method is less safe because it depends on the data being sourced and the it must reference to the element if I want to do anything with it which can cause slower prerformance. CreateElement is faster performance and safer than insertAdjacentHTML.
  iconsData.forEach((iconObj) => {
    if (iconObj.type === "edit") {
      categoryIcons.insertAdjacentHTML(
        "afterbegin",
        `
          <button id="gear-icon" class="material-symbols-outlined gear-icon">
            <span class="g-icon">${iconObj.icon}</span>
            <span class="icon-label">${iconObj.name}</span>
          </button>
        `,
      );
    }

    if (iconObj.type === "category") {
      categoryIcons.insertAdjacentHTML(
        "beforeend",
        `
        <button id="category-btn-${id}" class="material-symbols-outlined category-icon">
          <span class="icon">${iconObj.icon}</span>
          <span class="icon-label">${iconObj.name}</span>
        </button>
        `,
      );
      const viewCategoryBtn = document.getElementById(`category-btn-${id}`);
      viewCategoryBtn.addEventListener("click", () => {
        populateExpenses(iconObj.name);
      });
      id++;
    }
  });
}

// //populates the icons that will immediately reference the clicked button the moment it's being created.
// iconsData.forEach((iconObj) => {
//   const button = document.createElement("button");
//   button.classList.add("material-symbols-outlined");
//   button.classList.add("category-icon");
//   button.textContent = iconObj.icon;

//   const iconLabel = document.createElement("p");
//   iconLabel.classList.add("icon-label");
//   iconLabel.textContent = iconObj.name;

//   if (iconObj.type === "edit") {
//     button.id = "gear-icon";
//     button.classList.add("gear-icon");
//     categoryIcons.appendChild(button);
//     categoryIcons.appendChild(iconLabel);

//   }

//   if (iconObj.type === "category") {
//     button.id = `category-btn-${id}`;
//     categoryIcons.appendChild(button);
//     categoryIcons.appendChild(iconLabel);
//     button.addEventListener("click", () => {
//       populateExpenses(iconObj.name);
//     });
//     id++;
//   }
// });
