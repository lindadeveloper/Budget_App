import { iconsData } from "../data/iconsData.js";
import { populateExpenses } from "./populateExpenses.js";
import { openRemoveCategoryConfirmation } from "./removeIconCategory.js";

export function populateIcons() {
  const mobileQuery = window.matchMedia("(max-width: 799px)");
  const gearSettingIcon = document.getElementById("gearSettingIcon");
  const trackIcons = document.getElementById("trackIcons");
  const categoryDialog = document.getElementById("categoryDialog");
  const categoryIconContainer = document.querySelector(".category-icon-container");
  const gearSettingWrapper = document.querySelector(".gear-setting-wrapper");

  let id = 0;
  let isFirst = true;

  iconsData.forEach(processIcons);

  //to pass down the icon's data to each function
  function processIcons(item) {
    renderEditBtn(item);
    renderPlusBtn(item);
    renderViewAllBtn(item);
    renderIconBtns(item);
  }

  //to create the edit category button & to show the edit category modal
  function renderEditBtn(iconObj) {
    if (iconObj.type === "edit") {
      gearSettingIcon.insertAdjacentHTML(
        "afterbegin",
        `
            <button 
              id="gearEditBtn" 
              class="material-symbols-outlined gear-icon" 
              onClick="categoryDialogWrapper.showModal()">
              <span class="g-icon">${iconObj.icon}</span>
              <span class="icon-label">${iconObj.name}</span>
            </button>
          `,
      );
    }
  }
  //to create the add button inside the edit category
  function renderPlusBtn(iconObj) {
    if (iconObj.type === "add") {
      categoryDialog.insertAdjacentHTML(
        "afterbegin",
        `
          <button id="plusIcon" class="material-symbols-outlined plus-wrap">
              <span class="plus-icon">${iconObj.icon}</span>
              <span class="plus-label">${iconObj.name}</span>
          </button>
      `,
      );
    }
  }

  //to crop and hide the overflow icons on smaller devices
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

  //to create the view all button
  function renderViewAllBtn(iconObj) {
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

  //to create the category icons
  function renderIconBtns(iconObj) {
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
      //to only show the first icon rendered as active, so that the main content isn't empty
      if (isFirst) {
        populateExpenses(iconObj.name);
        isFirst = !isFirst;
      }

      const categoryIcon = document.getElementById(`category-icon-${id}`);
      const categoryBtn = categoryIcon.querySelector(".category-icon-wrapper");

      let currentId = id;

      //to show the icon as active when pressed
      categoryBtn.addEventListener("click", () => {
        const activeBtn = document.querySelector(".category-icon-wrapper.active");
        if (activeBtn) {
          activeBtn.classList.remove("active");
        }
        categoryBtn.classList.add("active");
        populateExpenses(iconObj.name);
      });
      id++;
      renderModalIcons(iconObj, currentId);
    }
  }

  //to render category modal Icons (icon image, remove -, and icon label) inside the edit category
  function renderModalIcons(iconObj, currentId) {
    const categoryIcons = document.getElementById("categoryIcons");
    if (iconObj.type === "category") {
      categoryIcons.insertAdjacentHTML(
        "beforeend",
        `          
        <li id="category-icon-${currentId}" class="modal-icon">
          <div class="modal-icon-wrapper">
            <button
              id="removeBtn-${currentId}"
              data-action="remove" 
              title="remove"class="material-symbols-outlined 
              remove-btn">
              remove
            </button>
            <span class="material-symbols-outlined icon-img">${iconObj.icon}</span>
            <span class="icon-label">${iconObj.name}</span>
          </div>
        </li>
        `,
      );
      openRemoveCategoryConfirmation(currentId);
    }
  }

  //things to consider: the setup will be calling per icon, Dom queries is on every function call, Dynamic items will need re-calling, code maintenance is more
  //How to improve? Use the delegation method: only setup once on page load, only on click, auto-covers new items, less maintenance
  //  code example from claude:
  // // ✅ Set this up once, never touch it again
  // document.querySelector('.modal').addEventListener('click', (e) => {
  //   const removeBtn = e.target.closest('[data-action="remove"]');
  //   if (!removeBtn) return;

  //   const modalItem = removeBtn.closest('.modal-icon');
  //   const id = modalItem.id; // "category-icon-1"

  //   // Remove from modal
  //   modalItem.remove();

  //   // Remove from carousel using the same id
  //   document.getElementById(id)?.remove();
  // });
}
