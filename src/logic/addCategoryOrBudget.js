import { addCategoryItem } from "../data/modifyCategoriesData.js";
import { populateExpenses } from "./populateExpenses.js";
import { categoryList } from "../data/categoryList.js";
import { addToCategory } from "./addToCategory.js";
import { addCategory } from "./addCategory.js";
import { titleCase } from "./titleCase.js";

export function addCategoryOrBudget(modalTitle) {
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
          <p id="warningText" class="warning-text invalid hidden">Please fill out the missing areas *</p>
        </div>
      </div>
        <div class="dollar">
          <label for="inputNewBudgetAmount" class="text-label">Total Spent</label>
          $<input type="number" id="inputNewBudgetAmount" name="budget_amount" class="edit-budget-amount">
          <span id="inputAreas0" class="invalid hidden">*</span>
        </div>
        <div class="dollar">
          <label for="newGoalLimitAmount" class="text-label">Goal Limit</label>
          $<input type="number" id="newGoalLimitAmount" name="goal_limit" class="edit-budget-amount">
          <span id="inputAreas1" class="invalid hidden">*</span>
        </div>
        <div class="edit-budget-date-wrapper">
          <label for="newEndDate">End Date</label>
          <input type="date" id="newEndDate" name="date" class="edit-budget-date" placeholder="MM/DD/YYYY"/>
          <span id="inputAreas2" class="invalid hidden">*</span>
        </div>
        <label for="inputCatOptions" class="input-title">Category:</label>
        <div class="input-title-container input-cat-list">
        <input type="text" 
          id="inputCatOptions"
          name="category"
          class="edit-budget-category-detail" 
          placeholder="eg. Appliances">
          <ul id="categoriesData" class="input-dropdown-list"></ul>
          <span id="inputAreas3" class="invalid hidden">*</span>
        </div>
        <label for="newBudgetDetailText" class="input-title">Expense:</label>
        <div class="input-title-container">
        <input type="text" 
          id="newBudgetDetailText"
          name="expense" 
          class="edit-budget-category-detail" 
          placeholder="eg. Microwave">
          <span id="inputAreas4" class="invalid hidden">*</span>
        </div>
    </div>
    <button id="saveCategoryBtn" class="save">SAVE</button>`,
  );

  //to add and search category
  const inputCatOptions = document.getElementById("inputCatOptions");
  const categoriesData = document.getElementById("categoriesData");

  inputCatOptions.addEventListener("input", () => {
    categoriesData.classList.remove("open");
    const inputValue = inputCatOptions.value.toUpperCase();

    document
      .querySelectorAll("#categoriesData li")
      .forEach((li) => li.classList.remove("selected"));

    const matchedCategory = categoryList.find(
      (categoryOption) => categoryOption.toUpperCase() === inputValue,
    );

    if (matchedCategory) {
      const categoryListId = document.getElementById(matchedCategory);
      categoriesData.classList.add("open");
      categoryListId.classList.add("selected");
      categoryListId.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // else {
    //   return inputValue;
    // }
  });

  categoriesData.addEventListener("click", (e) => {
    const clickedItem = e.target.closest("li");
    if (!clickedItem) return; // for if click didn't land on an <li>

    inputCatOptions.value = clickedItem.textContent.trim();
    categoriesData.classList.remove("open");

    document
      .querySelectorAll("#categoriesData li")
      .forEach((li) => li.classList.remove("selected"));
    clickedItem.classList.add("selected");
  });

  function renderCategory() {
    categoriesData.innerHTML = "";
    categoryList.forEach((categoryItem) => {
      categoriesData.innerHTML += `<li id=${categoryItem.toLowerCase()}>
      ${titleCase(categoryItem)}
      </li>`;
    });
  }
  renderCategory();
  addCategoryBudget.showModal();

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
    inputCatOptions.value = "";
  }

  //to save
  saveBtn.addEventListener("click", saved);
  function saved() {
    const warningText = document.getElementById("warningText");
    const newTotalSpent = parseFloat(inputNewBudgetAmount.value);
    const newValueLimit = parseFloat(newGoalLimitAmount.value);
    const newValueEndDate = newEndDate.value;
    const newCategoryOption = inputCatOptions.value;
    const newValueExpenseName = newBudgetDetailText.value;

    const allInputs = [
      newTotalSpent,
      newValueLimit,
      newValueEndDate,
      newCategoryOption,
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

    //might need some improvements such as addEventListener to "input" to check validity.
    function showWarnings() {
      let validCount = 0;
      for (let i = 0; i < allInputs.length; i++) {
        const inputAreas = document.getElementById(`inputAreas${i}`);
        if (!inputAreas) continue;

        if (isInvalid(allInputs[i])) {
          warningText.classList.remove("hidden");
          inputAreas.classList.remove("hidden");
        } else {
          inputAreas.classList.add("hidden");
          validCount++;
        }
      }
      if (validCount !== allInputs.length) {
        validCount = 0;
        checkValidInputs();
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
