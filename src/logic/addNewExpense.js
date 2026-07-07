export function addNewExpense(
  expenseNewItemId,
  newGoalLimit,
  newCategory,
  newEndDate,
  newExpenseName,
  newTotalSpent,
) {
  const expenseList = document.getElementById("expenseList");
  expenseList.insertAdjacentHTML(
    "beforeend",
    `<div id="expenseNewItem${expenseNewItemId}" class="expense-wrapper">
          <input type="checkbox" id="expenseCheckBox${expenseNewItemId}" class="expense-check-box hidden">
            <div class="expense-details">
              <span id="budgetName${expenseNewItemId}"class="item-name">${newExpenseName}</span>
              <div class="date-goal-wrap">
                <span id="endDate${expenseNewItemId}">End date: ${newEndDate}</span>
                <span id="goalLimit${expenseNewItemId}">Goal limit: $${newGoalLimit}</span>
              </div>
              <div class="progress">
                <p id="totalSpending${expenseNewItemId}" class="total-spent">Total spent: $${newTotalSpent}</p>
                <div 
                  id="progressBarUnused${expenseNewItemId}"
                  class="progress-bar"
                  data-width="${progress}%"
                  role="progressbar" 
                  aria-valuenow="${progress}" 
                  aria-valuemin="0"
                  aria-valuemax="100">
                  ${progress}%
                </div>
              </div>
            </div>
          </input>
          <button id="${expenseNewItemId}"class="edit-budget-btn color-primary-text">
            <i class="material-symbols-outlined">edit_note</i>
            <span>Edit</span>
          </button>
        </div>`,
  );
}
