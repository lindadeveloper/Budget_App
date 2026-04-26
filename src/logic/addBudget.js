import { openModal } from "./openModal.js";

export function addBudget() {
  const addBudgetTitle = "Add Budget";
  const addBudget = document.getElementById("addBudget");
  addBudget.addEventListener("click", () => {
    openModal(addBudgetTitle);
  });
}
