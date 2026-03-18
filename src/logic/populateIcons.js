import iconsData from "../data/iconsData.js";
import populateExpenses from "./populateExpenses.js";

export default function populateIcons() {
  const gearSettingIcon = document.getElementById("gearSettingIcon");
  const trackIcons = document.getElementById("trackIcons");

  let id = 0;

  iconsData.forEach((iconObj) => {
    if (iconObj.type === "edit") {
      gearSettingIcon.insertAdjacentHTML(
        "afterbegin",
        `
          <button id="gearIcon" class="material-symbols-outlined gear-icon">
            <span class="g-icon">${iconObj.icon}</span>
            <span class="icon-label">${iconObj.name}</span>
          </button>
        `,
      );
    }

    if (iconObj.type === "category") {
      trackIcons.insertAdjacentHTML(
        "beforeend",
        `
        <li class="category-list">
          <button id="category-btn-${id}" class="material-symbols-outlined category-icon">
            <span class="icon">${iconObj.icon}</span>
            <span class="icon-label">${iconObj.name}</span>
          </button>
        </li>
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
