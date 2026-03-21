import iconsData from "../data/iconsData.js";
import populateExpenses from "./populateExpenses.js";

export default function populateIcons() {
  const mobileQuery = window.matchMedia("(max-width: 799px)");
  const gearSettingIcon = document.getElementById("gearSettingIcon");
  const trackIcons = document.getElementById("trackIcons");
  const categoryIconContainer = document.querySelector(".category-icon-container");
  const gearSettingWrapper = document.querySelector(".gear-setting-wrapper");

  let id = 0;
  let isFirst = true;

  iconsData.forEach((iconObj) => {
    function renderEditBtn() {
      if (iconObj.type === "edit") {
        gearSettingIcon.insertAdjacentHTML(
          "afterbegin",
          `
            <button 
            id="gearEditBtn" 
            class="material-symbols-outlined gear-icon" 
            onClick="categoryDialog.showModal()">
              <span class="g-icon">${iconObj.icon}</span>
              <span class="icon-label">${iconObj.name}</span>
            </button>
          `,
        );
      }
    }

    function handleMobileChange(e) {
      if (e.matches) {
        categoryIconContainer.classList.add("reveal-mobile");
        trackIcons.classList.add("reveal-mobile");
        gearSettingWrapper.classList.add("reveal-mobile");
      } else {
        categoryIconContainer.classList.remove("reveal-mobile");
        trackIcons.classList.remove("reveal-mobile");
        gearSettingWrapper.classList.remove("reveal-mobile");
      }
    }

    function renderViewAllBtn() {
      if (iconObj.type === "viewAll") {
        handleMobileChange(mobileQuery);
        gearSettingIcon.insertAdjacentHTML(
          "afterbegin",
          `
            <button id="viewAllIcons" class="material-symbols-outlined view-all-icons">
              <span id="viewIcon" class="view-all">${iconObj.icon}</span>
              <span id="viewTextLabel" class="icon-label">${iconObj.name}</span>
            </button>
          `,
        );
        mobileQuery.addEventListener("change", handleMobileChange);
      }
    }

    function renderIconBtns() {
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
    }

    function manageCategory() {
      const categoryIcons = document.getElementById("categoryIcons");
      if (iconObj.type === "category") {
        categoryIcons.insertAdjacentHTML(
          "beforeend",
          `          
        <li id="category-icon-${id}" class="category-icon">
            <button class="category-icon-wrapper">
              <span class="material-symbols-outlined icon">${iconObj.icon}</span>
              <span class="icon-label">${iconObj.name}</span>
            </button>
          </li>
        `,
        );
      }
    }

    renderEditBtn();
    renderViewAllBtn();
    renderIconBtns();
    manageCategory();
  });
}
