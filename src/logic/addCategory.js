import { addCategoryOrBudget } from "./addCategoryOrBudget.js";

export function addCategory() {
  const addCategoryTitle = "New Category";
  const addCategoryBtn = document.getElementById("addCategoryBtn");
  addCategoryBtn.addEventListener("click", () => {
    addCategoryOrBudget(addCategoryTitle);
  });
}
