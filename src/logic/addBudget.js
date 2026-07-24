import { addCategoryOrBudget } from "./addCategoryOrBudget.js";

export function addBudget() {
  const addBudgetTitle = "Add Budget";
  const addBudget = document.getElementById("addBudget");
  addBudget.addEventListener("click", () => {
    addCategoryOrBudget(addBudgetTitle);
  });
}
