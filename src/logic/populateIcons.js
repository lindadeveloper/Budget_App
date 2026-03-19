import iconsData from "../data/iconsData.js";
import populateExpenses from "./populateExpenses.js";

export default function populateIcons() {
  const gearSettingIcon = document.getElementById("gearSettingIcon");
  const trackIcons = document.getElementById("trackIcons");

  let id = 0;
  let isFirst = true;

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
      const isActive = isFirst;

      trackIcons.insertAdjacentHTML(
        "beforeend",
        `
        <li id="category-icon-${id}" class="category-icon">
          <button class="category-icon-wrapper ${isActive ? "active" : ""}">
            <span class="material-symbols-outlined icon">${iconObj.icon}</span>
            <span class="icon-label">${iconObj.name}</span>
          </button>
        </li>
        `,
      );
      if (isFirst) {
        populateExpenses(iconObj.name);
        isFirst = !isFirst;
      }

      const categoryIcon = document.getElementById(`category-icon-${id}`);
      const categoryBtn = categoryIcon.querySelector(".category-icon-wrapper");

      categoryBtn.addEventListener("click", () => {
        const activeBtn = document.querySelector(".category-icon-wrapper.active");
        if (activeBtn) {
          activeBtn.classList.remove("active");
        }
        categoryBtn.classList.add("active");
        populateExpenses(iconObj.name);
      });
      id++;
    }
  });
}
