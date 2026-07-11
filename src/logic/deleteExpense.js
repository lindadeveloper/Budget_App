//to remove categories from the category modal
export function deleteExpense(expenseId, selectedExpense) {
  const expenseDeleteBtn = document.getElementById("expenseDeleteBtn");
  const cancelCategoryBtn = document.getElementById("expenseCancelBtn");
  const confirmationDialog = document.getElementById(
    "expenseConfirmationDialog",
  );
  const expenseItem = document.getElementById(`expenseItem${expenseId}`);

  confirmationDialog.showModal();

  expenseDeleteBtn.addEventListener("click", removeExpense, { once: true });
  cancelCategoryBtn.addEventListener("click", cancelExpense, { once: true });

  function cancelExpense() {
    confirmationDialog.close();
  }

  function removeExpense() {
    expenseItem.remove(selectedExpense);
    confirmationDialog.close();
    selectedExpense.length = 0;
  }
}
