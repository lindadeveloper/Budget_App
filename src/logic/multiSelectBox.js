import { deleteExpense } from "./deleteExpense.js";

export function multiSelect(expenseId) {
  let multiSelected = false;
  let selectedCheckBoxArr = [];
  let checkBoxChecked = false;

  const multiSelectBtn = document.getElementById("multiSelect");
  const deleteExpenseBtn = document.getElementById("deleteExpenseBtn");
  const selectAll = document.getElementById("selectAllOption");
  const categoryBtns = document.querySelectorAll(".category-icon-wrapper");

  //Need to fix expense Id since it's null
  const expenseCheckBox = document.getElementById(
    `expenseCheckBox${expenseId}`,
  );

  multiSelectBtn.addEventListener("click", multiSelectState);
  expenseCheckBox.addEventListener("change", deleteExpenseItems);

  categoryBtns.forEach((categoryBtn) => {
    categoryBtn.addEventListener("click", () => {
      deleteExpenseBtn.classList.add("hidden");
      expenseCheckBox.classList.add("hidden");
      selectAll.classList.add("hidden");
      multiSelectBtn.textContent = "Multiselect";
      expenseCheckBox.checked = false;
      selectedCheckBoxArr.length = 0;
      multiSelected = false;
    });
  });

  /*Changes the text and shows the delete and cancel button*/
  function multiSelectState() {
    multiSelected = !multiSelected;
    if (multiSelected) {
      deleteExpenseBtn.classList.remove("hidden");
      expenseCheckBox.classList.remove("hidden");
      selectAll.classList.remove("hidden");
      multiSelectBtn.textContent = "Cancel";
    } else {
      deleteExpenseBtn.classList.add("hidden");
      expenseCheckBox.classList.add("hidden");
      selectAll.classList.add("hidden");
      multiSelectBtn.textContent = "Multiselect";
    }
    expenseCheckBox.checked = false;
    selectedCheckBoxArr.length = 0;
  }

  /*selects all checkboxes */
  selectAll.addEventListener("click", () => {
    selectAllCheckboxes();
  });

  function selectAllCheckboxes() {
    checkBoxChecked = !checkBoxChecked;
    const checkboxes = document.querySelectorAll(".expense-check-box");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = checkBoxChecked ? true : false;
      if (checkBoxChecked) {
        selectedCheckBoxArr.push(checkbox.value);
      } else {
        selectedCheckBoxArr = [];
      }
    });
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
