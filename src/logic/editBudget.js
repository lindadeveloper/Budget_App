import { categoriesData } from "../data/categoriesData.js";

export function editBudget(editIconId, goalLimit, category, endDate, expenseName) {
  const editBudgetBtn = document.getElementById(editIconId);
  const editBudgetDialog = document.getElementById("editBudgetDialog");
  editBudgetBtn.addEventListener("click", () => {
    editBudgetDialog.innerHTML = "";
    editBudgetDialog.insertAdjacentHTML(
      "afterbegin",
      `<div id="${editIconId}" class="edit-budget-dialog">
      <p class="edit-budget-title">Edit Budget</p>
      <span class="dollar">$<input autofocus type="number" class="edit-budget-amount" onfocus="this.value=${goalLimit}"/></span>
      <div class="edit-budget-date-wrapper">
      <p>End Date</p>
      <input type="date" class="edit-budget-date" value="${endDate}"/>
      </div>
      <select id="categoryBudgetOption" class="edit-budget-category" name="Category">
      </select>
      <input type="text" class="edit-budget-category-detail" value="${expenseName}"></input>
      <button id="budgetSaveBtn" class="save">Save</button>
      <button id="budgetCloseBtn" class="cancel">Cancel</button>
      </div>`,
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

    editBudgetDialog.showModal();

    const saveBtn = document.getElementById("budgetSaveBtn");
    const closeBtn = document.getElementById("budgetCloseBtn");

    //to save
    saveBtn.addEventListener("click", saved);
    function saved() {
      editBudgetDialog.close();
      editBudgetDialog.innerHTML = "";
    }

    //to cancel
    closeBtn.addEventListener("click", closed);
    function closed() {
      editBudgetDialog.close();
      editBudgetDialog.innerHTML = "";
    }
  });
}
