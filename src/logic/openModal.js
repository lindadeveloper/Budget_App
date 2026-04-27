import { categoriesData } from "../data/categoriesData.js";

export function openModal(modalTitle) {
  const addCategoryBudget = document.getElementById("addCategoryBudget");

  addCategoryBudget.innerHTML = "";
  addCategoryBudget.insertAdjacentHTML(
    "afterbegin",
    `<div class="add-category-dialog">
     <div class="modal-header">
        <button
            title="close"
            onClick="addCategoryBudget.close()"
            class="material-symbols-outlined close-btn"
        >
          close
        </button>
      <p class="edit-budget-title">${modalTitle}</p>
      </div>
      <span class="dollar">$<input autofocus type="number" class="edit-budget-amount"/></span>
      <div class="edit-budget-date-wrapper">
      <p>End Date</p>
      <input type="date" class="edit-budget-date" placeholder="MM/DD/YYYY"/>
      </div>
      <select id="categoryOptions" class="edit-budget-category" name="Category">
      </select>
      <input type="text" class="edit-budget-category-detail" placeholder="Input Expense Name"></input>
      </div>
      <button id="saveCategoryBtn" class="save">Save</button>`,
  );

  //to edit category
  const categoryOptions = document.getElementById("categoryOptions");
  let categoryArr = [];
  categoriesData.forEach((itemObj) => {
    if (!categoryArr.includes(itemObj.category)) {
      categoryArr.push(itemObj.category);
    }
  });

  categoryArr.map((categoryItem) => {
    categoryOptions.innerHTML += `<option>${categoryItem.toUpperCase()}</option>`;
  });
  addCategoryBudget.showModal();

  const saveBtn = document.getElementById("saveCategoryBtn");

  //to save
  saveBtn.addEventListener("click", saved);
  function saved() {
    addCategoryBudget.close();
    addCategoryBudget.innerHTML = "";
  }

  //to cancel
  closeBtn.addEventListener("click", closed);
  function closed() {
    addCategoryBudget.close();
    addCategoryBudget.innerHTML = "";
  }
}
