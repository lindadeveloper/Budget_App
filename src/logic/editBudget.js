import { categoriesData } from "../data/categoriesData.js";
import { deleteExpense } from "./deleteExpense.js";

export function editBudget(
  expenseItemId,
  goalLimit,
  category,
  endDate,
  expenseName,
  totalSpending,
) {
  const editBudgetBtn = document.getElementById(expenseItemId);
  const editBudgetDialog = document.getElementById("editBudgetDialog");
  const expenseItem = document.getElementById(`expenseItem${expenseItemId}`);

  editBudgetBtn.addEventListener("click", () => {
    editBudgetDialog.innerHTML = "";
    editBudgetDialog.insertAdjacentHTML(
      "afterbegin",
      `<div id="${expenseItemId}" class="edit-budget-dialog">
      <div class="modal-header">
        <button
            title="close"
            onClick="editBudgetDialog.close()"
            class="material-symbols-outlined close-btn"
        >
          close
        </button>
        <p class="edit-budget-title">Edit Budget</p>
      </div>
      <div class="dollar">
        <span class="text-label">Total Spent</span>
        $<input type="number" id="inputBudgetAmount" class="edit-budget-amount" value="${totalSpending}">
      </div>
      <div class="dollar">
        <span class="text-label">Goal Limit</span>
        $<input type="number" id="goalLimitAmount" class="edit-budget-amount" value="${goalLimit}">
      </div>
      <div class="edit-budget-date-wrapper">
      <p class="text-label">End Date</p>
      <input id="endDateAmount" type="date" class="edit-budget-date" value="${endDate}">
      </div>
      <select id="categoryBudgetOption" class="edit-budget-category" name="Category">
      </select>
      <input id="budgetDetailText" type="text" class="edit-budget-category-detail" value="${expenseName}">
      </div>
      <button id="budgetSaveBtn" class="save">SAVE</button>
      <button id="budgetCloseBtn" class="delete">DELETE</button>`,
    );

    //to edit category
    const categoryBudgetOption = document.getElementById("categoryBudgetOption");
    let categoryArr = [];
    categoriesData.forEach((itemObj) => {
      if (!categoryArr.includes(itemObj.category)) {
        categoryArr.push(itemObj.category);
      }
    });

    categoryArr.map((categoryItem) => {
      categoryBudgetOption.innerHTML += `<option value="${categoryItem}" ${category === categoryItem ? "selected" : ""}>${categoryItem.toUpperCase()}</option>`;
    });

    //edit budget modal start here
    editBudgetDialog.showModal();

    const saveBtn = document.getElementById("budgetSaveBtn");
    const closeBtn = document.getElementById("budgetCloseBtn");

    const inputBudgetAmount = document.getElementById("inputBudgetAmount");
    const goalLimitAmount = document.getElementById("goalLimitAmount");
    const endDateAmount = document.getElementById("endDateAmount");
    const budgetDetailText = document.getElementById("budgetDetailText");

    const totalSpentNum = document.getElementById(`totalSpending${expenseItemId}`);
    const goalLimitNum = document.getElementById(`goalLimit${expenseItemId}`);
    const endDateNum = document.getElementById(`endDate${expenseItemId}`);
    const budgetDetailWord = document.getElementById(`budgetName${expenseItemId}`);

    //to save
    saveBtn.addEventListener("click", saved);
    function saved() {
      const newValueSpent = parseFloat(inputBudgetAmount.value);
      const newValueLimit = parseFloat(goalLimitAmount.value);
      const newValueEndDate = endDateAmount.value;
      const newValueExpenseName = budgetDetailText.value;

      //refer to the above existing parameters... scroll up to 'export function editBudget()'
      totalSpending = newValueSpent;
      goalLimit = newValueLimit;
      endDate = newValueEndDate;
      expenseName = newValueExpenseName;

      inputBudgetAmount.value = totalSpending;
      goalLimitAmount.value = goalLimit;
      endDateAmount.value = endDate;
      budgetDetailText.value = expenseName;

      // inputBudgetAmount.value = localStorage.setItem("totalSpending", totalSpending);

      totalSpentNum.textContent = `Total spent: $${totalSpending}`;
      goalLimitNum.textContent = `Goal limit: $${goalLimit}`;
      endDateNum.textContent = `End date: ${endDate}`;
      budgetDetailWord.textContent = `${expenseName}`;

      editBudgetDialog.close();
      editBudgetDialog.innerHTML = "";
    }

    //to cancel
    closeBtn.addEventListener("click", closed);
    function closed() {
      deleteExpense(expenseItemId, expenseItem);
      editBudgetDialog.close();
      editBudgetDialog.innerHTML = "";
    }
  });
}
