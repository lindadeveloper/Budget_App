let multiSelected = false;
let selectedCheckBoxArr = [];

const multiselectBtn = document.getElementById("multiselect");
const deleteExpenseBtn = document.getElementById("deleteExpenseBtn");

export function multiselect(expenseId) {
  const expenseCheckBox = document.getElementById(`expenseCheckBox${expenseId}`);
  multiselectBtn.addEventListener("click", multiselectState);
  expenseCheckBox.addEventListener("change", deleteExpenseItems);
  const expenseItem = document.getElementById(`expenseItem${expenseId}`);

  function multiselectState() {
    multiSelected = !multiSelected;
    multiselectBtn.textContent = multiSelected ? "Cancel" : "Multiselect";
    deleteExpenseBtn.classList.toggle("hidden");
    expenseCheckBox.classList.toggle("hidden");
  }

  function deleteExpenseItems(event) {
    const value = event.target.id;
    if (event.target.checked) {
      selectedCheckBoxArr.push(value);
    } else {
      const idx = selectedCheckBoxArr.indexOf(value);
      if (idx > -1) {
        selectedCheckBoxArr.splice(idx, 1);
      }
    }
    deleteExpenseBtn.addEventListener("click", deleteConfirm);
    function deleteConfirm() {
      expenseItem.remove(selectedCheckBoxArr);
    }
  }
}
