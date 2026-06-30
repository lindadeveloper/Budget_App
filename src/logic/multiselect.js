export function multiSelect(expenseId) {
  let multiSelected = false;
  let selectedCheckBoxArr = [];

  const multiSelectBtn = document.getElementById("multiSelect");
  const deleteExpenseBtn = document.getElementById("deleteExpenseBtn");

  const expenseCheckBox = document.getElementById(`expenseCheckBox${expenseId}`);
  multiSelectBtn.addEventListener("click", multiSelectState);
  expenseCheckBox.addEventListener("change", deleteExpenseItems);
  const expenseItem = document.getElementById(`expenseItem${expenseId}`);

  function multiSelectState() {
    multiSelected = !multiSelected;
    multiSelectBtn.textContent = multiSelected ? "Cancel" : "Multiselect";
    deleteExpenseBtn.classList.toggle("hidden");
    expenseCheckBox.classList.toggle("hidden");
  }

  /*Need to improve this code*/
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
    deleteExpenseBtn.addEventListener("click", deleteConfirm);
    function deleteConfirm() {
      expenseItem.remove(selectedCheckBoxArr);
      selectedCheckBoxArr.length = 0;
    }
  }
}
