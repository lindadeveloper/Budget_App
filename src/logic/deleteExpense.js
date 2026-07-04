//to remove categories from the category modal
import { multiSelect } from "./multiSelectBox.js";

export function deleteExpense(expenseId, selectedCheckBoxArr) {
  const expenseDeleteBtn = document.getElementById("expenseDeleteBtn");
  const cancelCategoryBtn = document.getElementById("expenseCancelBtn");
  const confirmationDialog = document.getElementById("expenseConfirmationDialog");
  const expenseItem = document.getElementById(`expenseItem${expenseId}`);

  confirmationDialog.showModal();

  expenseDeleteBtn.addEventListener("click", removeExpense, { once: true });
  cancelCategoryBtn.addEventListener("click", cancelExpense, { once: true });

  function cancelExpense() {
    confirmationDialog.close();
  }

  function removeExpense() {
    expenseItem.remove(selectedCheckBoxArr);
    confirmationDialog.close();
    return (selectedCheckBoxArr.length = 0);
  }
}
