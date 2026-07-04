import { deleteExpense } from "./deleteExpense.js";

export function multiSelect(expenseId) {
  let multiSelected = false;
  let selectedCheckBoxArr = [];

  const multiSelectBtn = document.getElementById("multiSelect");
  const deleteExpenseBtn = document.getElementById("deleteExpenseBtn");
  const expenseCheckBox = document.getElementById(`expenseCheckBox${expenseId}`);
  const expenseItem = document.getElementById(`expenseItem${expenseId}`);

  multiSelectBtn.addEventListener("click", multiSelectState);
  expenseCheckBox.addEventListener("change", deleteExpenseItems);

  /*Changes the text and shows the delete and cancel button*/
  function multiSelectState() {
    multiSelected = !multiSelected;
    if (multiSelected) {
      deleteExpenseBtn.classList.remove("hidden");
      expenseCheckBox.classList.remove("hidden");
      multiSelectBtn.textContent = "Cancel";
    } else {
      deleteExpenseBtn.classList.add("hidden");
      expenseCheckBox.classList.add("hidden");
      multiSelectBtn.textContent = "Multiselect";
    }
    expenseCheckBox.checked = false;
    selectedCheckBoxArr.length = 0;
  }

  /*To delete the expense. Needs to improve this code*/
  function deleteExpenseItems(event) {
    const value = event.target.id;
    if (event.target.checked) {
      selectedCheckBoxArr.push(value);
    } else {
      const selectedItemId = selectedCheckBoxArr.indexOf(value);
      if (selectedItemId > -1) {
        selectedCheckBoxArr.splice(selectedItemId, 1);
      }
    }
  }
  deleteExpenseBtn.addEventListener("click", deleteConfirm);
  function deleteConfirm() {
    if (selectedCheckBoxArr.length === 0) {
      return;
    } else if (selectedCheckBoxArr.length > 0) {
      deleteExpense(expenseId, selectedCheckBoxArr);
    }
  }
}
