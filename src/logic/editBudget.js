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
      <select id="category" class="edit-budget-category" name="Category">
      <option value="${category}">${category.toUpperCase()}</option>
      </select>
      <p class="edit-budget-category-detail" contenteditable="true">${expenseName}</p>
      <button id="saveBtn" class="edit-budget-save">Save</button>
      <button id="closeBtn" class="edit-budget-cancel">Cancel</button>
      </div>`,
    );
    editBudgetDialog.showModal();

    const saveBtn = document.getElementById("saveBtn");
    const closeBtn = document.getElementById("closeBtn");

    saveBtn.addEventListener("click", saved);
    function saved() {
      editBudgetDialog.close();
      editBudgetDialog.innerHTML = "";
    }
    closeBtn.addEventListener("click", closed);
    function closed() {
      editBudgetDialog.close();
      editBudgetDialog.innerHTML = "";
    }
  });
}
