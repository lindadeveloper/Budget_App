export function editBudget() {
  const editBudgetBtn = document.getElementById("editBudgetBtn");
  const editBudgetDialog = document.getElementById("editBudgetDialog");
  editBudgetBtn.addEventListener("click", editBudget);

  function editBudget() {
    editBudgetDialog.showModal();
  }
}
