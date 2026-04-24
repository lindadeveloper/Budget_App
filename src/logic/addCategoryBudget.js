import { categoriesData } from "../data/categoriesData.js";

export function addCategoryBudget() {
  const addCategory = document.getElementById("addCategory");
  const addCategoryBtn = document.getElementById("addCategoryBtn");

  addCategoryBtn.addEventListener("click", () => {
    addCategory.innerHTML = "";
    addCategory.insertAdjacentHTML(
      "afterbegin",
      `<div class="add-category-dialog">
      <p class="edit-budget-title">Add Category</p>
      <span class="dollar">$<input autofocus type="number" class="edit-budget-amount"/></span>
      <div class="edit-budget-date-wrapper">
      <p>End Date</p>
      <input type="date" class="edit-budget-date" value="${new Date()}"/>
      </div>
      <select id="categoryOptions" class="edit-budget-category" name="Category">
      </select>
      <input type="text" class="edit-budget-category-detail" placeholder="Input Expense Name"></input>
      <button id="saveCategoryBtn" class="save">Save</button>
      <button id="closeCategoryBtn" class="cancel">Cancel</button>
      </div>`,
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
    addCategory.showModal();

    const saveBtn = document.getElementById("saveCategoryBtn");
    const closeBtn = document.getElementById("closeCategoryBtn");

    //to save
    saveBtn.addEventListener("click", saved);
    function saved() {
      addCategory.close();
      addCategory.innerHTML = "";
    }

    //to cancel
    closeBtn.addEventListener("click", closed);
    function closed() {
      addCategory.close();
      addCategory.innerHTML = "";
    }
  });
}
