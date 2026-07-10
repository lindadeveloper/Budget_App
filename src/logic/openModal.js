import { addCategoryItem } from "../data/modifyCategoriesData.js";
import { populateExpenses } from "./populateExpenses.js";
import { categoryList } from "../data/categoryList.js";

export function openModal(modalTitle) {
  const addCategoryBudget = document.getElementById("addCategoryBudget");

  /*Modal for adding new category and budget */
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
        <div class="dollar">
          <span class="text-label">Total Spent</span>
          $<input type="number" id="inputNewBudgetAmount" class="edit-budget-amount">
        </div>
        <div class="dollar">
          <span class="text-label">Goal Limit</span>
          $<input type="number" id="newGoalLimitAmount" class="edit-budget-amount">
        </div>
        <div class="edit-budget-date-wrapper">
          <p>End Date</p>
          <input type="date" id="newEndDate" class="edit-budget-date" placeholder="MM/DD/YYYY"/>
        </div>
        <select id="newCategoryOptions" class="edit-budget-category" name="Category">
        </select>
        <input type="text" 
          id="newBudgetDetailText" 
          class="edit-budget-category-detail" 
          placeholder="Input Expense Name">
    </div>
    <button id="saveCategoryBtn" class="save">SAVE</button>`,
  );

  //to edit category

  const categoryOptions = document.getElementById("newCategoryOptions");
  categoryList.forEach((categoryItem) => {
    categoryOptions.innerHTML += `
    <option value="${categoryItem}">
    ${categoryItem.toUpperCase()}
    </option>`;
  });
  addCategoryBudget.showModal();

  const saveBtn = document.getElementById("saveCategoryBtn");

  //to save
  saveBtn.addEventListener("click", saved);
  function saved() {
    const newTotalSpent = parseFloat(inputNewBudgetAmount.value);
    const newValueLimit = parseFloat(newGoalLimitAmount.value);
    const newValueEndDate = newEndDate.value;
    const newValueExpenseName = newBudgetDetailText.value;
    const newCategoryOption = newCategoryOptions.value;

    const itemObj = {
      category: newCategoryOption,
      name: newValueExpenseName,
      price: newTotalSpent,
      date: newValueEndDate,
      goal: newValueLimit,
    };
    addCategoryItem(itemObj);
    populateExpenses(itemObj.category);
    addCategoryBudget.close();
    addCategoryBudget.innerHTML = "";
  }

  //to cancel
  // closeBtn.addEventListener("click", closed);
  // function closed() {
  //   addCategoryBudget.close();
  //   addCategoryBudget.innerHTML = "";
  // }
}
