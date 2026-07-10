import { getCategoriesData } from "../data/modifyCategoriesData.js";
import { editBudget } from "./editBudget.js";
import { multiSelect } from "./multiSelectBox.js";

export function populateExpenses(objName) {
  const expenseList = document.getElementById("expenseList");
  const categoryTitle = document.getElementById("categoryTitle");

  let expenseItemId = 0;

  //to make the first letter uppercased on every word
  function titleCase(str) {
    return str
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.substring(1))
      .join(" ");
  }

  expenseList.innerHTML = "";
  categoryTitle.textContent = titleCase(objName);

  const categoriesData = getCategoriesData();

  categoriesData.forEach((itemObj) => {
    let goalLimit = itemObj.goal;
    let totalSpent = itemObj.price;
    let endDate = itemObj.date;
    let expenseName = itemObj.name;
    let category = itemObj.category;

    if (objName.toUpperCase() === itemObj.category.toUpperCase()) {
      const progress = Math.round((itemObj.price / goalLimit) * 100);
      expenseList.insertAdjacentHTML(
        "afterbegin",
        `<div id="expenseItem${expenseItemId}" class="expense-wrapper">
          <input type="checkbox" id="expenseCheckBox${expenseItemId}" class="expense-check-box hidden">
            <div class="expense-details">
              <span id="budgetName${expenseItemId}"class="item-name">${expenseName}</span>
              <div class="date-goal-wrap">
                <span id="endDate${expenseItemId}">End date: ${endDate}</span>
                <span id="goalLimit${expenseItemId}">Goal limit: $${goalLimit}</span>
              </div>
              <div class="progress">
                <p id="totalSpending${expenseItemId}" class="total-spent">Total spent: $${totalSpent}</p>
                <div 
                  id="progressBarUnused${expenseItemId}"
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
          <button id="${expenseItemId}"class="edit-budget-btn color-primary-text">
            <i class="material-symbols-outlined">edit_note</i>
            <span>Edit</span>
          </button>
        </div>
        `,
      );
      document.querySelectorAll(".progress-bar").forEach((bar) => {
        bar.style.setProperty("--target-width", bar.dataset.width);
      });
      editBudget(
        expenseItemId,
        goalLimit,
        category,
        endDate,
        expenseName,
        totalSpent,
      );
      multiSelect(expenseItemId);
    }
    expenseItemId++;
  });
}
// For more security, use this method instead, but it's more verbose:

// const expenseDiv = document.createElement("div");
// expenseDiv.id = "expense-details";

// const categoryPara = document.createElement("p");
// categoryPara.textContent = itemObj.category;
// expenseDiv.appendChild(categoryPara);

// const span = document.createElement("span");
// span.textContent = itemObj.name;
// expenseDiv.appendChild(span);

// const datePara = document.createElement("p");
// datePara.textContent = `End date: ${itemObj.date}`;
// expenseDiv.appendChild(datePara);

// const goalPara = document.createElement("p");
// goalPara.textContent = `Goal limit $${itemObj.price}`;
// expenseDiv.appendChild(goalPara);

// const progressDiv = document.createElement("p");
// progressDiv.classList.add("progress-bar");
// expenseDiv.appendChild(progressDiv);

// const editBtn = document.createElement("button");
// editBtn.textContent = "edit";
// expenseDiv.appendChild(editBtn);

// categoryDetails.appendChild(expenseDiv);
