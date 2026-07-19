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
        <div>
          <p class="edit-budget-title">${modalTitle}</p>
          <p id="inputAreas0" class="warning-text invalid hidden">Please fill out the missing areas *</p>
        </div>
      </div>
        <div class="dollar">
          <span class="text-label">Total Spent</span>
          $<input type="number" id="inputNewBudgetAmount" class="edit-budget-amount">
          <span id="inputAreas1" class="invalid hidden">*</span>
        </div>
        <div class="dollar">
          <span class="text-label">Goal Limit</span>
          $<input type="number" id="newGoalLimitAmount" class="edit-budget-amount">
          <span id="inputAreas2" class="invalid hidden">*</span>
        </div>
        <div class="edit-budget-date-wrapper">
          <p>End Date</p>
          <input type="date" id="newEndDate" class="edit-budget-date" placeholder="MM/DD/YYYY"/>
          <span id="inputAreas3" class="invalid hidden">*</span>
        </div>
        <select id="newCategoryOptions" class="edit-budget-category" name="Category">
        </select>
        <div class="input-expense-name">
        <input type="text" 
          id="newBudgetDetailText" 
          class="edit-budget-category-detail" 
          placeholder="Input Expense Name">
          <span id="inputAreas4" class="invalid hidden">*</span>
        </div>
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

  // selectAllOptions(categoryOptions);

  const saveBtn = document.getElementById("saveCategoryBtn");

  const inputNewBudgetAmount = document.getElementById("inputNewBudgetAmount");
  const newGoalLimitAmount = document.getElementById("newGoalLimitAmount");
  const newEndDate = document.getElementById("newEndDate");
  const newBudgetDetailText = document.getElementById("newBudgetDetailText");

  function resetForm() {
    inputNewBudgetAmount.value = "";
    newGoalLimitAmount.value = "";
    newEndDate.value = "";
    newBudgetDetailText.value = "";
    categoryOptions.value = "";
  }

  //to save
  saveBtn.addEventListener("click", saved);
  function saved() {
    const newTotalSpent = parseFloat(inputNewBudgetAmount.value);
    const newValueLimit = parseFloat(newGoalLimitAmount.value);
    const newValueEndDate = newEndDate.value;
    const newValueExpenseName = newBudgetDetailText.value;
    const newCategoryOption = categoryOptions.value;

    const allInputs = [
      newTotalSpent,
      newValueLimit,
      newValueEndDate,
      newValueExpenseName,
    ];

    function isInvalid(value) {
      return (
        value === null ||
        value === undefined ||
        value === "" ||
        (typeof value === "number" && Number.isNaN(value))
      );
    }

    //need to fix this bug
    function showWarnings() {
      let validCount = 0;
      for (let i = 0; i < allInputs.length; i++) {
        const inputAreas = document.getElementById(`inputAreas${i}`);
        if (!inputAreas) continue;

        if (isInvalid(allInputs[i])) {
          inputAreas.classList.remove("hidden");
        } else {
          inputAreas.classList.add("hidden");
          validCount++;
        }
      }
      if (validCount !== allInputs.length) {
        saveBtn.disabled = true;
      } else {
        saveBtn.disabled = false;
      }
      return validCount === allInputs.length;
    }

    function checkValidInputs() {
      if (showWarnings()) {
        const itemObj = {
          category: newCategoryOption,
          name: newValueExpenseName,
          price: newTotalSpent,
          date: newValueEndDate,
          goal: newValueLimit,
        };
        addCategoryItem(itemObj);
        populateExpenses(itemObj.category);
        saveBtn.disabled = false;
        addCategoryBudget.close();
        resetForm();
      }
    }
    checkValidInputs();
  }
}
